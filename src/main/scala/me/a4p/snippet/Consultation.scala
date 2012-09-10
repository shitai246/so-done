package me.a4p.snippet

import net.liftweb.http.{RequestVar, SHtml}
import net.liftweb.common.{Box, Full}
import net.liftweb.util.Helpers._
import scala.xml.{Group, NodeSeq}
import _root_.me.a4p.model.ConsultData
import java.util.Date

/**
 * 相談を受け付けるsnipet
 */
class Consultation {

  object consult extends RequestVar(Full(""))

  /**
   * 相談を受け付ける
   */
  def consultation( xhtml:Group  ):NodeSeq  =  {
    consult.is.openTheBox match {
      case "" => bind("consult", xhtml,
        "text" -> SHtml.textarea("", c => consult(Full(c)), "class" -> "span4", "rows" -> "6"),
        "submit" -> SHtml.submit( " 送 信 ", {() => save(consult)}, "class" -> "btn btn-primary btn-large")
        )
      case _ => <p>相談を受け付けました。</p>
    }
  }

  private def save(consultation: Box[String]) : Boolean = {
    consultation match {
      case Full(c) => ConsultData.create
          .consultation(c)
          .userId(TwitterSessionVar.getUser.id)
          .addDate(new Date)
          .publicFlg(false).save
      case _=> false
    }
  }
}
