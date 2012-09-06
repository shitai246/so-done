package me.a4p.model

import _root_.net.liftweb.mapper._
import _root_.net.liftweb.util._
import _root_.net.liftweb.common._

/**
 * The singleton that has methods for accessing the database
 */
object ReplyData extends ReplyData with KeyedMetaMapper[Long, ReplyData] {
  override def dbTableName = "reply_data" // define the DB table name
  override def fieldOrder = List(
      id, consultId, reply, userId, addDate)
}

/**
 * An O-R mapped "User" class that includes first name, last name, password and we add a "Personal Essay" to it
 */
class ReplyData extends KeyedMapper[Long, ReplyData] {
  def getSingleton = ReplyData // what's the "meta" server
  def primaryKeyField = id //　主キーの設定
  
  object id extends MappedLongIndex(this)
  object consultId extends MappedLong(this)
  object reply extends MappedString(this, 1024)
  object userId extends MappedLong(this)
  object addDate extends MappedDateTime(this)
}
