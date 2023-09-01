#include<iostream>
#include<bits/stdc++.h>
using namespace std;

char findExtra(string s1,string s2){
    int n = s1.length();
    int res = 0;
    for(int i=0;i<n;i++){
        res = res ^s1[i]^s2[i];

        res = res^s2[n];
    }
    return (char) res;
}

int main() {
string s1;
cout<<"Enter"<<endl;

getline(cin,s1); //reads the input string from user until a newline character is encountered

return 0;
}
