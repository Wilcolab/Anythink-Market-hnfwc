#!/bin/sh
# Script that takes in a comma-separated text sign-up file, 
# searches for users with an amazon.com email address, and outputs 
# the corresponding firstname and lastname to a text file in the 
# same directory with a default name of "output_names.txt" if a 
# second argument filename is not given.

if [ -z "$1" ]; then
  echo "Oops! No argument supplied."
  exit 1
fi
OUTPUT=${2:-output_names.txt}
awk -F ',' 'tolower($4) ~ /amazon\.com/ {print $3, $2}' "$1" > "$OUTPUT"
exit 0
