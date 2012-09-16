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
import net.liftweb.http.S

/**
 * 相談一覧
 */
class ConsultList {

  object consult extends RequestVar(Full(new ConsultData))

  def list(xhtml : NodeSeq) : NodeSeq = {
      ConsultData.findAll.flatMap{ data =>
        bind("list", xhtml,
          "consultation" -> SHtml.link("/consult/data?id=" + data.id.get, () => (), Text(trimConsultation(data.consultation))),
          "addDate" -> ("%tY/%<tm/%<td %<tH:%<tM:%<tS" format data.addDate.get),
          "status" -> (if (data.publicFlg.get) "受付終了" else "受付中")
        )
      }
  }

  /**
   * 自分の相談一覧を取得する
   */
  def myConsultList(xhtml : NodeSeq) : NodeSeq  =  {
    val list = ConsultData.findAll(By(ConsultData.userId, TwitterSessionVar.getUser.id))
    list.flatMap{ data =>
        bind("list", xhtml,
          "consultation" -> SHtml.link("/consult/data?id=" + data.id.get, () => (), Text(trimConsultation(data.consultation))),
          "addDate" -> ("%tY/%<tm/%<td %<tH:%<tM:%<tS" format data.addDate.get),
          "status" -> (if (data.publicFlg.get) "受付終了" else "受付中")
        )
    }
  }

  /**
   * 自分の回答一覧を取得する
   */
  def myReplyList(xhtml : NodeSeq) : NodeSeq = {
    val list = ReplyData.findAll(By(ReplyData.userId, TwitterSessionVar.getUser.id))
    val list2 = ConsultData.findAll(ByList(ConsultData.id, list.map(a => a.consultId.get)))
    list2.flatMap{ data =>
        bind("list", xhtml,
          "consultation" -> SHtml.link("/consult/data?id=" + data.id.get, () => (), Text(trimConsultation(data.consultation))),
          "addDate" -> ("%tY/%<tm/%<td %<tH:%<tM:%<tS" format data.addDate.get),
          "status" -> (if (data.publicFlg.get) "受付終了" else "受付中")
        )
    }
  }

  def consultView(xhtml: Group) : NodeSeq = {
    val consultData = ConsultData.find(By(ConsultData.id, S.param("id").openOr("0").toLong))
    consultData match {
      case Full(c) =>
        bind("consult", xhtml,
          "consultation" -> {XML.loadString("<p>" + c.consultation.get.replaceAll(sys.props("line.separator").head.toString, "<br />") + "</p>")},
          "consultDate" -> <span>{"%tY/%<tm/%<td %<tH:%<tM:%<tS" format c.addDate.get}</span>
        )
      case _ => <blank />
    }
  }

  private def trimConsultation(consultation : String) : String = {
    if (consultation.size <= 35) {
      consultation
    } else {
      consultation.substring(0, 33) + "…"
    }
  }
}