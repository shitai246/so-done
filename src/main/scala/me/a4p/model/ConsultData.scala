package me.a4p.model

import _root_.net.liftweb.mapper._
import _root_.net.liftweb.util._
import _root_.net.liftweb.common._

/**
 * The singleton that has methods for accessing the database
 */
object ConsultData extends ConsultData with KeyedMetaMapper[Long, ConsultData] {
  override def dbTableName = "consult_data" // define the DB table name
  override def fieldOrder = List(
      id, consultation, userId, addDate, publicFlg)
}

/**
 * An O-R mapped "User" class that includes first name, last name, password and we add a "Personal Essay" to it
 */
class ConsultData extends KeyedMapper[Long, ConsultData] {
  def getSingleton = ConsultData // what's the "meta" server
  def primaryKeyField = id //　主キーの設定
  
  object id extends MappedLongIndex(this)
  object consultation extends MappedString(this, 1024)
  object userId extends MappedLong(this)
  object addDate extends MappedDateTime(this)
  object publicFlg extends MappedBoolean(this)
}
