#include<stdio.h>
int primeGang = 0;
int m,n;

int isPrime(int n){
    
    if(n == 1){
        return 0;
    }
    if(n == 2){
        return 1;
    }
    if (n % 2 == 0) 
        return 0; 
  
    // if not, then just check the odds 
    for (int i = 3; i * i <= n; i += 2)  
        if (n % i == 0) 
            return 0;     
    return 1; 
} 

void main(){
    printf("Enter the number of rows");
    scanf("%d",&m);
    printf("Enter the number of columns");
    scanf("%d",&n);

    int A[m][n];
    printf("Enter the elements");
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            scanf("%d",&A[i][j]);
            if(isPrime(A[i][j])){
                A[i][j] = 1;
            }
            else{
                A[i][j] = 0;
            }
        }
    }
    printf("\n");
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            printf("%d ",A[i][j]);
        }
        printf("\n");
    }

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            checkGang(i,j,A);
        }
    }
    printf("The number of prime gangs are: %d",primeGang);

}