
problem=$1
cd task$problem
echo $(pwd)

#Compile the program
g++ -std=c++17 sol.cpp -o $problem.out
ls

infiles=(`ls in*.txt`)

for ((i=0; i<${#infiles[@]}; i++)); do
    ./$problem.out < in$i.txt > your_out$i.txt
done

cd ..
./check.sh task$problem
