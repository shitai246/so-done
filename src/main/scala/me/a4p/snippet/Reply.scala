package me.a4p.snippet

import net.liftweb.http.{RequestVar, SHtml}
import net.liftweb.common.{Box, Full}
import net.liftweb.http.SHtml._
import net.liftweb.util.Helpers._
import scala.xml.{Group, NodeSeq, Text, XML}
import java.util.Date
import _root_.me.a4p.model.{ConsultData, ReplyData}
import net.liftweb.mapper.{By, NotBy}
import net.liftweb.util.Props

/**
 * 返信を受け付けるsnipet
 */
class Reply {

  val replyMax = (Props.get("reply.max") openOr "10").toInt

  object consult extends RequestVar(Full(new ConsultData))
  object reply extends RequestVar(Full(""))
  object consultId extends RequestVar(Full(""))

  def consultList() : NodeSeq = {
    val consultList = ConsultData.findAll(By(ConsultData.publicFlg, false), NotBy(ConsultData.userId, TwitterSessionVar.getUser.id))
    consultList.flatMap(a => <tr><td>{link("/consult/reply", () => consult(Full(a)), Text(trimConsultation(a.consultation)))}</td><td>{"%tY/%<tm/%<td %<tH:%<tM:%<tS" format a.addDate.get}</td></tr>)
  }

  def reply( xhtml: Group ) : NodeSeq = {
    reply.is.openTheBox match {
      case "" => bind("reply", xhtml,
        "consultation" -> {XML.loadString("<p>" + consult.openTheBox.consultation.get.replaceAll(sys.props("line.separator").head.toString, "<br />") + "</p>")},
        "consultDate" -> <span>{"%tY/%<tm/%<td %<tH:%<tM:%<tS" format  consult.openTheBox.addDate.get}</span>,
        "consultData" -> SHtml.hidden(c => consultId(Full(c)), consult.openTheBox.id.toString),
        "text" -> SHtml.textarea("", r => reply(Full(r)), "class" -> "span4", "rows" -> "6"),
        "submit" -> SHtml.submit(" 送 信 ", {() => save(consultId, reply)}, "class" -> "btn btn-primary btn-large")
        )
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
          println("debug1 :  " + c)
          if (ReplyData.findAll(By(ReplyData.consultId, c.toLong)).size >= replyMax) {
            ConsultData.find(By(ConsultData.id, c.toLong)).openTheBox.publicFlg(true).save
          }
          true
        case _ => false
        }
      case _ => false
    }
  }

  private def trimConsultation(consultation : String) : String = {
    if (consultation.size <= 40) {
      consultation
    } else {
      consultation.substring(0, 38) + "…"
    }
  }

  def replyList() : NodeSeq = {
    ReplyData.findAll().flatMap(a => <tr>{a.htmlLine}</tr>)
  }
}