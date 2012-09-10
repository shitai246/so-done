package bootstrap.liftweb

import _root_.net.liftweb.util._
import _root_.net.liftweb.common._
import _root_.net.liftweb.http._
import _root_.net.liftweb.http.provider._
import _root_.net.liftweb.sitemap._
import _root_.net.liftweb.sitemap.Loc._
import Helpers._
import _root_.net.liftweb.mapper.{DB, ConnectionManager, Schemifier, DefaultConnectionIdentifier, StandardDBVendor}
import _root_.java.sql.{Connection, DriverManager}
import _root_.me.a4p.model._
import me.a4p.snippet.TwitterSessionVar


/**
 * A class that's instantiated early and run.  It allows the application
 * to modify lift's environment
 */
class Boot {
  
  
  def boot {
    if (!DB.jndiJdbcConnAvailable_?) {
      val vendor = 
	new StandardDBVendor(Props.get("db.driver") openOr "org.h2.Driver",
			     Props.get("db.url") openOr "jdbc:h2:lift_proto.db;AUTO_SERVER=TRUE",
			     Props.get("db.user"), Props.get("db.password"))

      LiftRules.unloadHooks.append(vendor.closeAllConnections_! _)

      DB.defineConnectionManager(DefaultConnectionIdentifier, vendor)
    }



    // DocType HTML5
    LiftRules.docType.default.set((r: Req) => r match {
        case _ if S.skipDocType => Empty
        case _ if S.getDocType._1 => S.getDocType._2
        case _ => Full(DocType.html5)
    })

    LiftRules.useXhtmlMimeType = false

    // where to search snippet
    LiftRules.addToPackages("me.a4p")
    Schemifier.schemify(true, Schemifier.infoF _, UserMst)
    Schemifier.schemify(true, Schemifier.infoF _, ConsultData)
    Schemifier.schemify(true, Schemifier.infoF _, ReplyData)

    // Build SiteMap
    def sitemap() = SiteMap(
      Menu("Home") / "index",
//      Menu(Loc"Twitterログイン", Li)
      Menu("Twitterログイン") / "twitter" / "signin" >> Hidden,
      Menu("twitterCallback") / "twitter" / "callback" >> Hidden,
      Menu("相談する") / "consult" / "consult" >> loginAfter,
      Menu("回答する") / "consult" / "replyList" >> loginAfter,
      Menu("回答") / "consult" / "reply" >> Hidden,
      Menu("自分の相談") / "consult" / "myConsultList" >> loginAfter,
      Menu("自分の回答") / "consult" / "myReplyList" >> loginAfter,
      Menu("みんなの回答") / "consult" / "all"
      // Menu with special Link
//      Menu(Loc("Static", Link(List("static"), false, "/static/index"), "Static Content"))
      // ディレクトリごと読み取り可能にするやつら
//      Menu(Loc("common", List("common") -> true, "", Hidden)),
//      Menu(Loc("as", List("as") -> true, "", Hidden))
	  )

//    LiftRules.setSiteMapFunc(() => User.sitemapMutator(sitemap()))
    LiftRules.setSiteMapFunc(() => sitemap())

    /*
     * Show the spinny image when an Ajax call starts
     */
    LiftRules.ajaxStart =
      Full(() => LiftRules.jsArtifacts.show("ajax-loader").cmd)

    /*
     * Make the spinny image go away when it ends
     */
    LiftRules.ajaxEnd =
      Full(() => LiftRules.jsArtifacts.hide("ajax-loader").cmd)

    LiftRules.early.append(makeUtf8)

//    LiftRules.loggedInTest = Full(() => User.loggedIn_?)
    LiftRules.loggedInTest = Full(() => TwitterSessionVar.isLogined)

    // CLASSPATHで指定可能にするフォルダ
    ResourceServer.allow {
      case "css" :: _ => true
      case "js" :: _ => true
      case "img" :: _ => true
    }

    S.addAround(DB.buildLoanWrapper)
  }

  def loginFirst : If = {
    new If(() => !TwitterSessionVar.isLogined, "")
  }

  def loginAfter : If = {
    new If(() => TwitterSessionVar.isLogined, "")
  }
  
  /**
   * Force the request to be UTF-8
   */
  private def makeUtf8(req: HTTPRequest) {
    req.setCharacterEncoding("UTF-8")
  }
}
