# code-challenge
### DESCRIPTION
##############################

For an array A of size L filled with integers, and the array being split into two parts.

First part: A[0], A[1]...A[S];

Second part: A[S+1], A[S+2]... A[L-1];

For every possible value of S find the largest absolute difference between the max
values of each array part.

In your code, build a function calculateMaximumAbosluteDifference
which ONLY receives the array as input and calculates the maximum
possible value of V between all possible ways of splitting the array
in 2:

V = Math.Abs(Max(A[0],A[1]...A[S]) - Max(A[S+1], A[S+2]...A[L-1]))


### INSTALATION
##############################

1. Clone the repository
2. Run command "npm start"
3. Change array content to see the result in file "src/index.ts" (Line 72)
4. Enjoy!!!
