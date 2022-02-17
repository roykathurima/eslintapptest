#! /bin/bash

# ECHO COMMAND
# echo Roy Kathurima

# Variables
# Uppercase by convention
# Can contain letters, numbers, underscores
NAME="Riley"
# echo "My name is $NAME"
# echo "My name is ${NAME}"

# USER INPUT -> Prompt the user
# read -p "Enter your name: " NAME
# echo "Hello $NAME, nice to meet you"

# Simple IF statement
# if [ "$NAME" == "Riley" ]
# then
#     echo "Your name is Riley"
# fi

# Simple IF statement continutation
if [[ "$NAME" == "Riley" ]] ; then
    echo "Your name is Riley"
fi

# if-else
# if [ "$NAME" == "Riley" ]
# then
#     echo "Your name is Riley"
# else   
#     echo "Your name is not Riley"
# fi

# ELSE-IF (elif)
# if [ "$NAME" == "Riley" ]
# then
#     echo "Your name is Riley"
# elif [ "$NAME" == "Jake" ]
# then
#     echo "Your name is Jake"
# else   
#     echo "Your name is neither Jake nor Riley"
# fi

# COMPARISON OPERATORS
# -eq, -ne, -gt, -ge, -lt, -le (<=)
# NUM1=3
# NUM2=5
# if [ "$NUM1" -gt "$NUM2" ]
# then
#     echo "$NUM1 is greater than $NUM2"
# else
#     echo "$NUM2 is greater than $NUM1"
# fi

# FILE CONDITIONS

# CASE STATEMENT
# read -p "Are you 21 or over? Y/N: " ANSWER
# case "$ANSWER" in
#     [yY] | [yY][eE][sS])
#         echo "You can have a beer :)"
#         ;;
#     [nN] | [nN][oO])
#         echo 'Sorry, no drnking'
#         ;;
#     *)
#     echo "Please enter y/yes or n/no"
#     ;;
# esac

# $ references while 
# SIMPLE FOR LOOP
# NAMES="Brad Kevin Alice Mark"
# for NAME in $NAMES
#     do
#         echo "Hello $NAME"
# done

# WHILE LOOPS
# FUNCTIONS
# FUNCTION WITH PARAMS