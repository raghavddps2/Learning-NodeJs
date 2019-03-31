#include<stdio.h>
#include<math.h>
#include<stdlib.h>
struct rect{
    int xl,yl,xr,yr;
};
int min(int a,int b){
    int min = a;
    if(b<a){
        return b;
    }
    return a;
}

int max(int a,int b){
    int max = a;
    if(b>a){
        return b;
    }
    return a;
}
int overlappingArea(struct rect r[],int n) 
{ 
    int area[n];
    int sumA = 0;
    int sumB = 0;
    int k = 0;
    int p = n*(n-1)/2;
    int areaI[p];
    // printf("\n*********************\n");
    for(int i=1;i<=n;i++){
        // printf("%d %d %d %d\n",r[i].xl,r[i].yl,r[i].xr,r[i].yr);
        area[i] = abs(r[i].xl- r[i].xr) * abs(r[i].yl - r[i].yr);
        sumA = sumA + area[i];
    }
    // printf("%d",sumA);
    for(int i=1;i<=n;i++){
        // printf("\n%d===>",i);
        for(int j=i+1;j<=n;j++){
            // areaI[k] = (min(r[i].xr, r[j].xr) -  
            //      max(r[i].xl, r[j].xl)) *  
            //     (min(r[i].yr, r[j].yr) - 
            //      max(r[i].yl, r[j].yl));
            int a1 = (min(r[i].xr, r[j].xr) -  max(r[i].xl, r[j].xl));
            int a2 = (min(r[i].yr, r[j].yr) - max(r[i].yl, r[j].yl));

                 

                 if(a1 >0 && a2>0){
                     areaI[k] = a1*a2;
                    // printf("%d(%d)   ",areaI[k],j);
                    sumB = sumB + areaI[k];
                 }
                 k++;
        }
        
    }
    
    return(sumA-sumB);
} 

void main(){
    int t;
    // printf("\nEnter the number of test cases:\t");
    scanf("%d",&t);

    for(int i=1;i<=t;i++){
        int n;
        // printf("\nEnter the value of n:\t");
        scanf("%d",&n);
        struct rect r[n];
        for(int j=1;j<=n;j++){
            scanf("%d",&r[j].xl);
            scanf("%d",&r[j].yl);
            scanf("%d",&r[j].xr);
            scanf("%d",&r[j].yr);
            r[j].xr = r[j].xr + r[j].xl;
            r[j].yr = r[j].yr + r[j].yl;
        }
        int overlappingArea1 = overlappingArea(r,n);
        printf("%d\n",overlappingArea1);
    }


}