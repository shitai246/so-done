package me.a4p.snippet

import java.util.HashMap
import twitter4j._
import twitter4j.auth.RequestToken
import net.liftweb.http._
import net.liftweb.common._
import net.liftweb.util._
import java.util.Date
import scala.xml.{NodeSeq, Text}
import _root_.me.a4p.model.UserMst
import net.liftweb.mapper.By

/** Twitterログイン情報を保持するSessionVar */
object TwitterSessionVar extends SessionVar[HashMap[String, Any]](new HashMap[String, Any]) {
  def getUser() : UserMst = {
    this.get("_loginUserData").asInstanceOf[UserMst]
  }

  def setUser(userMst : UserMst) : Unit = {
    this.put("_loginUserData", userMst)
  }

  def isLogined() : Boolean = {
    this.containsKey("_loginUserData")
  }
}

/**
 * Twitterによるログイン処理を行うクラス
 */
class TwitterLogin {
  /**
   * Twitter OAuth認証用 ConsumerKey
   * TODO 外部ファイルに記述するようにする。
   */
  val consumerKey = Props.get("twitter.consumerkey") openOr "gpyoJOWVur4RFIkTDPqAQ"

  /**
   * Twitter OAuth認証用 ConsumerSecretKey
   * TODO 外部ファイルに記述するようにする。
   */
  val consumerSecret = Props.get("twitter.consumersecret") openOr "vXGMrzED9EVuL56a5eswmzbu384I4772sErNZ9U"

  /**
   * Twitter OAuth認証用 CallBackUrl
   * TODO 外部ファイルに記述するようにする。
   */
  val callbackURL = Props.get("twitter.callbackurl") openOr "http://127.0.0.1:8080/twitter/callback"

  /**
   * Twitter から取得したユーザーごとのキーをmd5化するときに付与するサービスコード
   * 今後サービスが増えたとき、単にキーをmd5しておくだけだとセキュリティ的にアレな気がするので…
   * TODO 外部ファイルに記述するようにする。
   */
  val myServiceCode = Props.get("my.service.code") openOr "test"

  /**
   * TwitterへのOAuth認証を行う.
   */
  def signin(): Unit = {
    val twitter = new TwitterFactory().getInstance();
    twitter.setOAuthConsumer(consumerKey, consumerSecret)
    TwitterSessionVar.put("_twitter", twitter)

    val reqToken = twitter.getOAuthRequestToken(callbackURL)
    TwitterSessionVar.put("_reqToken", reqToken)

    S.redirectTo(reqToken.getAuthenticationURL())
  }

  /**
   * TwitterからのOAuthコールバック後の処理を行う.
   * 取得したデータを元にユーザ情報をDBに保存する。
   * 処理終了後はindexにリダイレクト
   * TODO リダイレクトする必要があるか？
   * TODO リダイレクト先も外部指定にする？？
   */
  def callback(): Unit = {
    // セッションからTwitterオブジェクトとリクエストトークンを取得
    val twitter = TwitterSessionVar.get("_twitter").asInstanceOf[Twitter]
    val reqToken = TwitterSessionVar.get("_reqToken").asInstanceOf[RequestToken]
    val verifier = S.param("oauth_verifier").openOr("")

    // DBにデータを保存
    val accToken = twitter.getOAuthAccessToken(reqToken, verifier)
    val twitterKey = SecurityHelpers.md5(accToken.getToken + "." + myServiceCode)
    val twitterName = accToken.getScreenName
    val userMst = UserMst.find(By(UserMst.twitterKey, twitterKey)).openOr(UserMst.create)
    userMst.twitterKey(twitterKey).twitterName(twitterName).save()

    // セッション上の余計なデータは消しておく
    TwitterSessionVar.remove
    // セッションにユーザ情報を格納
    TwitterSessionVar.setUser(userMst)

    // アクセストークン取得後のページへリダイレクト
    S.redirectTo("../index")
  }

  /**
   * ログインチェックを行う.
   * 未ログインならログインリンクを表示。
   * ログイン済みならとりあえず名前だす。
   * TODO ログイン後のメニュー表示もここで処理するか？？
   */
  def loginCheck(xml: NodeSeq): NodeSeq = {
    if (TwitterSessionVar.isLogined()) {
      val userMst = TwitterSessionVar.getUser
      <a>ようこそ { userMst.twitterName } さん</a>
    } else {
      SHtml.link("/twitter/signin", () => (), Text("Twitterログイン"))
    }
  }

  /**
   * ログイン情報を一覧に表示する.
   * TODO テストが終わったら消す。
   */
  def userList(xml: NodeSeq): NodeSeq = {
    UserMst.findAll().flatMap(u => <tr><td>{ u.id.get }</td>{ u.htmlLine }</tr>)
  }
}