package me.a4p.snippet

import net.liftweb.http.{RequestVar, SHtml}
import net.liftweb.common.{Box, Full}
import net.liftweb.util.Helpers._
import net.liftweb.http.SHtml._
import scala.xml.{Group, NodeSeq}
import _root_.me.a4p.model.{UserMst, ConsultData, ReplyData}
import java.util.Date
import net.liftweb.mapper.{By, ByList}
import scala.xml.Text
import scala.xml.XML

/**
 * 自分の相談一覧
 */
class ConsultList {

  object consult extends RequestVar(Full(new ConsultData))

  /**
   * 自分の相談一覧を取得する
   */
  def myConsultList() : NodeSeq  =  {
    val list = ConsultData.findAll(By(ConsultData.userId, TwitterSessionVar.getUser.id))
    list.flatMap(a => showConsultData(a))
  }

  /**
   * 自分の回答一覧を取得する
   */
  def myReplyList() : NodeSeq = {
    val list = ReplyData.findAll(By(ReplyData.userId, TwitterSessionVar.getUser.id))
    val list2 = ConsultData.findAll(ByList(ConsultData.id, list.map(a => a.consultId.get)))
    list2.flatMap(a => showConsultData(a))
  }

  /**
   * public な相談一覧を取得する
   */
  def publicConsultList() : NodeSeq = {
    val list = ConsultData.findAll(By(ConsultData.publicFlg, true))
    list.flatMap(a => showConsultData(a))
  }

  def view(xhtml: Group) : NodeSeq = {
    val c = consult.openTheBox
    bind("consult", xhtml,
        "consultation" -> {XML.loadString("<p>" + c.consultation.get.replaceAll(sys.props("line.separator").head.toString, "<br />") + "</p>")},
        "consultDate" -> <span>{"%tY/%<tm/%<td %<tH:%<tM:%<tS" format c.addDate.get}</span>,
        "reply" -> {showReply(c)}
      )
  }

  private def showConsultData(consultData : ConsultData) : NodeSeq = {
    <tr><td>{SHtml.link("/consult/data", () => consult(Full(consultData)), Text(trimConsultation(consultData.consultation)))}</td><td>{"%tY/%<tm/%<td %<tH:%<tM:%<tS" format consultData.addDate.get}</td></tr>
  }

  private def showReply(c : ConsultData) : NodeSeq = {
    if (c.publicFlg || (TwitterSessionVar.isLogined && c.userId.get == TwitterSessionVar.getUser.id.get)) {
      ReplyData.findAll(By(ReplyData.consultId, c.id)).flatMap(r => showReplyData(r))
    } else {
      ReplyData.findAll(By(ReplyData.consultId, c.id), By(ReplyData.userId, TwitterSessionVar.getUser.id)).flatMap(r => showReplyData(r))
    }
  }
  private def showReplyData(r : ReplyData) : NodeSeq = {
    val replyName = UserMst.find(By(UserMst.id, r.userId)).openTheBox.twitterName
    val reply = XML.loadString("<p>" + r.reply.get.replaceAll(sys.props("line.separator").head.toString, "<br />") + "</p>")
    <tr><td>{reply}<div class="span2">@{replyName}</div><div class="pull-right">{"%tY/%<tm/%<td %<tH:%<tM:%<tS" format r.addDate.get}</div></td></tr>
  }

  /**
   * FIXME 重複こーど
   */
  private def trimConsultation(consultation : String) : String = {
    if (consultation.size <= 40) {
      consultation
    } else {
      consultation.substring(0, 38) + "…"
    }
  }
}