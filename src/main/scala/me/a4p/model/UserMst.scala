package me.a4p.model

import _root_.net.liftweb.mapper._
import _root_.net.liftweb.util._
import _root_.net.liftweb.common._

/**
 * The singleton that has methods for accessing the database
 */
object UserMst extends UserMst with KeyedMetaMapper[Long, UserMst] {
  override def dbTableName = "user_mst" // define the DB table name
  override def fieldOrder = List(
      id, twitterKey, twitterName)
}

/**
 * An O-R mapped "User" class that includes first name, last name, password and we add a "Personal Essay" to it
 */
class UserMst extends KeyedMapper[Long, UserMst] {
  def getSingleton = UserMst // what's the "meta" server
  def primaryKeyField = id //　主キーの設定
  
  object id extends MappedLongIndex(this)
  object twitterKey extends MappedString(this, 256)
  object twitterName extends MappedString(this, 64)
  object lastLogin extends MappedDateTime(this)
}
