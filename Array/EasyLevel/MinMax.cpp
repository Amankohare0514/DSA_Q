#include<iostream>
using namespace std;
void getMinMax(int arr[] , int n){
    int max = arr[0];
    int min = arr[0];
    for(int  i=1; i<n; i++){
        if(max < arr[i])
        max = arr[i];
        if(min > arr[i])
        min = arr[i];
    }
    cout<<"maximum is"<<max<<endl;
    cout<<"minimum is"<<min<<endl;
}
int main(){
    int arr[]={4,2,4,1,0,5,8};
    int  N=8;
    getMinMax(arr,N);
    return 0;
}