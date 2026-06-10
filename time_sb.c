#include <stdio.h>
#include <time.h>

void constant_time(int n) {
    int x = n * n;
}

void linear_time(int n) {
    volatile int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += i;
    }
}

void quadratic_time(int n) {
    volatile int sum = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            sum += i + j;
        }
    }
}

int main() {
 int n;
    printf("Enter the number of samples\n");
    scanf("%d",&n);
    int sizes[n];
    for(int i=0;i<n;i++){
        printf("Enter sample %d :",i+1);
        scanf("%d",&sizes[i]);
    }
    int len = sizeof(sizes) / sizeof(sizes[0]);

    for (int i = 0; i < len; i++) {
        int n = sizes[i];
        clock_t start, end;
        double time_taken;

        printf("\nInput size n = %d\n", n);

        start = clock();
        constant_time(n);
        end = clock();
        time_taken = (double)(end - start) / CLOCKS_PER_SEC;
        printf("O(1)   Time: %f seconds\n", time_taken);

        start = clock();
        linear_time(n);
        end = clock();
        time_taken = (double)(end - start) / CLOCKS_PER_SEC;
        printf("O(n)   Time: %f seconds\n", time_taken);

        start = clock();
        quadratic_time(n);
        end = clock();
        time_taken = (double)(end - start) / CLOCKS_PER_SEC;
        printf("O(n^2) Time: %f seconds\n", time_taken);
    }

    return 0;
}
