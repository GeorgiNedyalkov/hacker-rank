# HackerRank Problems for week 2 of 3 moths preparation plan

1. Grading Students

Every student receives a grad for 0 to 100
Any grade less than 40 is a failing grade

The grades are rounded according to these rules:

- If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
- If the value of the grade is less than 38, no rounding occurs because it is a failing grade.

Examples:

- grade = 84 rount to 85 (85 - 84 is less than 3)
- grade = 29 do not round (result is less than 40)
- grade = 57 do not round (60 - 57 is 3 or higher)

Given the initial grade for each of Sam's students, write code to automate the rounding process.

Reutn the grades after rounding.

2. Mars Exploration

A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.

Example

The original message was SOSSOS. Two of the message's characters were changed in transit.

Function Description:

Complete the marsExploration function in the editor below.

marsExploration has the following parameter(s):

string s: the string as received on Earth
Returns:
int: the number of letters changed during transmission
Input Format

There is one line of input: a single string, s.

Explanation

Sample 0

= SOSSPSSQSSOR, and signal length . Sami sent SOS messages (i.e.: 12 / 3 = 4).

Expected signal: SOSSOSSOSSOS
Recieved signal: SOSSPSSQSSOR

We print the number of changed letters, which is 3.

Sample 1

= SOSSOT, and signal length . Sami sent SOS messages (i.e.: 6 / 3 = 2).

Expected Signal: SOSSOS
Received Signal: SOSSOT

We print the number of changed letters, which is 1.

3. Flipping Bits

Input: 32 bit unsigner integer.

Give a number with 1 and 0's. Flip 1 to 0 and vice versa.

Output: int: unsigned decimal integer

4. Giagonal Difference

Given a square matrix calculate the absolute difference between its diagonals.

1 2 3
4 5 6
9 8 9

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

return the absolute difference.

5. Counting Sort

Quicksort usually has a running time of , but is there an algorithm that can sort even faster? In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. A comparison sort algorithm cannot beat (worst-case) running time, since represents the minimum number of comparisons needed to know where to place each element.
