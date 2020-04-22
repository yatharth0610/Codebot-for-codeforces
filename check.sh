#!/bin/bash
cd $1

cfoutfiles=(`ls out*.txt`)
youroutfiles=(`ls your_out*txt`)

cmd="vim -c 'set diffopt=filler,verical' -c 'edit ${cfoutfiles[0]}' -c 'vert diffsplit ${youroutfiles[i]}' "
for ((i=1; i<${#cfoutfiles[@]}; i++)) do 
    cmd="${cmd} -c 'tabe ${cfoutfiles[i]}' -c 'vert diffsplit ${youroutfiles[i]}' "
done

echo $cmd
eval $cmd
cd ..
