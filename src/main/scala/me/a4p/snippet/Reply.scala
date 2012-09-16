package me.a4p.snippet

import net.liftweb.http.{RequestVar, SHtml}
import net.liftweb.common.{Box, Full}
import net.liftweb.http.SHtml._
import net.liftweb.util.Helpers._
import scala.xml.{Group, NodeSeq, Text, XML}
import java.util.Date
import _root_.me.a4p.model.{ConsultData, ReplyData, UserMst}
import net.liftweb.mapper.{By, NotBy}
import net.liftweb.util.Props
import net.liftweb.http.S

/**
 * 返信を受け付けるsnipet
 */
class Reply {

  val replyMax = (Props.get("reply.max") openOr "10").toInt

  object reply extends RequestVar(Full(""))
  object consultId extends RequestVar(Full(""))

  def replyView(xhtml: Group) : NodeSeq = {
    val consultData = ConsultData.find(By(ConsultData.id, S.param("id").openOr("0").toLong))
    consultData match {
      case Full(c) => createReplyView(consultData.openTheBox, xhtml)
      case _ => <blank />
    }
  }

  private def createReplyView(consultData : ConsultData, xhtml: Group) : NodeSeq = {
    if (consultData.publicFlg) {
      ReplyData.findAll(By(ReplyData.consultId, consultData.id)).flatMap(r =>
          bind("reply", xhtml,
            "reply" -> XML.loadString("<p>" + r.reply.get.replaceAll(sys.props("line.separator").head.toString, "<br />") + "</p>"),
            "replyDate" -> ("%tY/%<tm/%<td %<tH:%<tM:%<tS" format r.addDate.get),
            "replyUser" -> UserMst.find(By(UserMst.id, r.userId)).openTheBox.twitterName
              )
        )
    } else if (!TwitterSessionVar.isLogined) {
      SHtml.link("/twitter/signin", () => (), Text("回答するにはログインしてください。"))
    } else {
      ReplyData.findAll(By(ReplyData.consultId, consultData.id),
          By(ReplyData.userId, TwitterSessionVar.getUser.id)).flatMap(r =>
          bind("reply", xhtml,
            "reply" -> XML.loadString("<p>" + r.reply.get.replaceAll(sys.props("line.separator").head.toString, "<br />") + "</p>"),
            "replyDate" -> ("%tY/%<tm/%<td %<tH:%<tM:%<tS" format r.addDate.get),
            "replyUser" -> UserMst.find(By(UserMst.id, r.userId)).openTheBox.twitterName
              ))
    }
  }


  def reply( xhtml: Group ) : NodeSeq = {
    reply.is.openTheBox match {
      case "" => 
        val consultData = ConsultData.find(By(ConsultData.id, S.param("id").openOr("0").toLong))
        consultData match {
          case Full(c) =>
            if (c.publicFlg || !TwitterSessionVar.isLogined
                || c.userId.get == TwitterSessionVar.getUser.id.get) {
              <blank />
            } else {
              val replyData = ReplyData.findAll(By(ReplyData.consultId, c.id),
                By(ReplyData.userId, TwitterSessionVar.getUser.id))
              if (replyData.size > 0) {
                <blank />
              } else {
                bind("reply", xhtml,
                  "consultId" -> SHtml.hidden(c => consultId(Full(c)), c.id.toString),
                  "text" -> SHtml.textarea("", r => reply(Full(r)), "class" -> "span4", "rows" -> "6"),
                  "submit" -> SHtml.submit(" 送 信 ", {() => save(consultId, reply)}, "class" -> "btn btn-primary btn-large")
                 )
              }
            }
          case _ => <blank />
        }
      case _ => <p>回答を受け付けました。</p>
    }
  }

  private def save(consultId : Box[String], reply : Box[String]) : Boolean = {
    consultId match {
      case Full(c) => reply match {
        case Full(r) => 
          ReplyData.create
            .consultId(c.toLong)
            .reply(r)
            .userId(TwitterSessionVar.getUser.id)
            .addDate(new Date).save
          if (ReplyData.findAll(By(ReplyData.consultId, c.toLong)).size >= replyMax) {
            ConsultData.find(By(ConsultData.id, c.toLong)).openTheBox.publicFlg(true).save
          }
          true
        case _ => false
        }
      case _ => false
    }
  }
}