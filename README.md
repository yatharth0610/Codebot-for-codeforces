# Codebot-for-codeforces
This project aims at creating a bot that parses the problems of a contest helps to work on sample input and output test cases directly to save time.

# Setup/Installation
```bash
INSTALLATION_PATH="<directory_path_where_you_want_to_clone>"; # also the dir where you will write solution
cd $INSTALLATION_PATH
git clone https://github.com/yatharth0610/Codebot-for-codeforces.git
cd codebot-for-codeforces
npm install
```

# Usage
Add the template that you use for cp under the name skeleton.cpp in this directory and that will be loaded in every problem folder's sol.cpp.

```bash
export cf_contest='link_of_the_contest_you_want_to_be_parsed'
node app.js or nodemon app.js
# will parse all the problems of the contest
# download their testcases
# create multiple directories taskA taskB taskC taskD taskE depending on the number of problems in contest
# each directory created will have 
#    in0.txt out0.txt 
#    in1.txt out1.txt and so on 
# which represent the testcases downloaded
```

# Running sol.cpp on multiple testcases and comparing outputs
```bash
Check whether you are allowed to execute the bash scripts by using ls -la if the bash scripts are not executable then run

chmod +x run.sh check.sh
./run.sh A #if you want to test A/sol.cpp
./run.sh D #if you want to test D/sol.cpp against your output vs sample output
# this will open vim window
# and compare your sol.cpp output v/s sample output for all test cases
# each test case is compared in each tab
# press gt to cycle through the vim tabs. You can change this by changing your .vimrc and adding option of your choice. I have changed this to ctrl + -> and ctrl + <- but you can use whatever suits you.
# write :qa! to exit all tabs at once
```
