#include<stdio.h>

int sockMerchant(int n, int ar_count, int* ar) {
    int arr[100] = {0};
    ar_count = 0;
    for(int i=0;i<n;i++){
        arr[ar[i]]++;
    }
    for(int i=1;i<=100;i++){    

        if(arr[i] != 0 && arr[i] != 1){
            if(arr[i]%2 == 0){
                ar_count = ar_count+ (arr[i]/2);
            }
            else{
                ar_count = ar_count + ((arr[i]-1)/2);
            }
        }
    
    }
    return ar_count;

}

void main(){
    int arr[10] = {1,1,3,1,2,1,3,3,3,3};
    printf("%d",sockMerchant(10,0,arr));
}