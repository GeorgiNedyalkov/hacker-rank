# Hacker Rank Problems

## Week 1 preparation 

### 1. Mini-max sum 
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [1,3,5,7,9]
The minimum sum is 1 + 3 + 5 + 7 = 16  and the maximum sum is 3 + 5 + 7 + 9 = 24 . The function prints
```
16 24
```

#### Print
Print two space-separated integers on one line: the minimum sum and the maximum sum of  of 4 of 5 elements.

#### Input format
A single line of five space-separated integers.

Sample input:
```
1 2 3 4 5
```
#### Output format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample output: 
```
10 14
```

### 2. Plus Minus 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Example
arr = [1,1,0,-1,-1]

There are n=5 elements, two positive, two negative, and one zero. Their ratios are 2/5 = 0.4000000, 2/5 = 0.400000, 1/5 = 0.200000 
Results are printed as:
```
0.400000
0.400000
0.200000
```
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers

#### Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

#### Input Format

The first line contains an integer, n, the size of the array.
The second line contains n space-separated integers that describe arr[n].

#### Output Format
Print the following 3 lines, each to 6 decimals:

proportion of positive values
proportion of negative values
proportion of zeros.


### Breaking the Records

