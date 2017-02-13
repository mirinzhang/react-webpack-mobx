#!/usr/bin/env bash

set -e

HINT="usage \n -m git add -A && git commit -m \$message && git push"

if [ ! "$1" ] || [ "$1" != "-m" ]
then
        echo -e $HINT
else
        while getopts m: OPTION
        do
                case $OPTION in
                        m)
                                MESSAGE=$OPTARG
                                ;;
                        \?)
                                echo -e $HINT
                                ;;
                esac
        done
        if [ -n "$MESSAGE" ]
        then
                git add -A
                git commit -m "$MESSAGE"
                git push
        fi
fi

set +e
