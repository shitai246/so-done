package me.a4p.snippet

import net.liftweb.http.{RequestVar, SHtml}
import net.liftweb.common.{Box, Full}
import net.liftweb.util.Helpers._
import scala.xml.{Group, NodeSeq}
import _root_.me.a4p.model.{UserMst, ConsultData, ReplyData}
import java.util.Date
import net.liftweb.mapper.By

/**
 * 自分の相談一覧
 */
class ConsultList {

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
    list.flatMap(a => showMyReplyData(a))
  }

  /**
   * public な相談一覧を取得する
   */
  def publicConsultList() : NodeSeq = {
    val list = ConsultData.findAll(By(ConsultData.publicFlg, true))
    list.flatMap(a => showConsultData(a))
  }

  private def showConsultData(consultData : ConsultData) : NodeSeq = {
    val list = ReplyData.findAll(By(ReplyData.consultId, consultData.id))
    <p>{consultData.consultation}({consultData.addDate})</p><ul>{list.flatMap(a => showReplyData(a))}</ul>
  }

  private def showReplyData(replyData : ReplyData) : NodeSeq = {
    val replyName = UserMst.find(By(UserMst.id, replyData.userId)).openTheBox.twitterName
    <li>@{replyName} : {replyData.reply} ({replyData.addDate})</li>
  }

  private def showMyReplyData(replyData : ReplyData) : NodeSeq = {
    val consultData = ConsultData.find(By(ConsultData.id, replyData.consultId)).openTheBox
    if (consultData.publicFlg) {
      showConsultData(consultData)
    } else {
      <p>{consultData.consultation}({consultData.addDate})</p><ul><li>@{TwitterSessionVar.getUser.twitterName} : {replyData.reply} ({replyData.addDate})</li></ul>
    }
  }
}