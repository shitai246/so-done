#!/bin/sh
# so-done deploy script

cd /var/www/so-done

# jvm option
RUN_MODE=$1

if [ "${RUN_MODE}" != "" ]; then
  export MAVEN_OPTS=-Drun.mode=${RUN_MODE}
fi

/usr/share/apache-maven-2.2.1/bin/mvn jetty:stop
/usr/share/apache-maven-2.2.1/bin/mvn jetty:run >> /var/log/httpd/so-done/liftweb.log & 
