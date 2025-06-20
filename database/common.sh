#!/usr/bin/env bash

###~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~##
#
# FUNCTION: get_required_input
# Get user input from the terminal.
# Params: $1 = the message prompting the user.
# Params: $2 = the error message if no input is received.
#
###~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~##
get_required_input() {
  if [ -z "$1" -o -z "$2" ]; then
    echo "get_required_input requires a prompt and an error message as first and second parameters." >&2
    exit 1
  fi

  while true; do
    echo -n "$1" >&2
    read input
    if [ -z "$input" ]; then
      echo "$2" >&2
    else
      break
    fi
  done
  echo $input
}

###~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~##
#
# FUNCTION: check_conf_var
# Sanity check to ensure variable is defined, and exit if not
# Params: $1 = Name of the variable
#
###~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~##
check_conf_var() {
  if [[ -z ${!1} ]]
  then
    echo "$1 not defined"
    CONF_BAD=true
  fi
}

###~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~##
#
# Source .env file, and make sure necessary params are defined
#
###~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~##
if [[ -e "../.env" ]]
then
  source "../.env"
else
  echo ".env not found"
  exit 1
fi

CONF_BAD=false
check_conf_var POSTGRES_USER
check_conf_var POSTGRES_PASSWORD
if $CONF_BAD; then exit 1; fi

# Escape for postgresql -- the password will appear in our generated sql as a
# single-quoted string literal, so we need to insert a ' character before
# every ' in the original password.  No other escaping is necessary.
# https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-CONSTANTS
POSTGRES_PASSWORD_ESC=$(sed -e "s/[']/'&/g" <<< $POSTGRES_PASSWORD)

# Escape for sed -- we'll use the password as a sed replacement pattern,
# meaning we must insert a \ character before every \, / and & character
# in the sql-escaped password from above.
# https://stackoverflow.com/questions/407523/escape-a-string-for-a-sed-replace-pattern/2705678#2705678
POSTGRES_PASSWORD_ESC=$(sed -e 's/[\/&]/\\&/g' <<< $POSTGRES_PASSWORD_ESC)

# Don't take database name from .env -- instead, hard code it to development db name.
# This way, accidentally running these scripts server-side will never affect the production db.
POSTGRES_DATABASE=foo_dev
