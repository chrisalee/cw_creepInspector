# cw_creepInspector
https://www.codewars.com/kata/64d686bd6fad185db7ecf127/solutions/javascript

Given a room containing some creep, can you predict how the room looks like after the next generation?
Description:

A room is a \n delimited string containing:
open space '.'
walls '#'
you may assert that any cell outside the bounds of the room is a wall
creep 0 - 9.
The number representing creep depicts its decay period (in number of generations) before it dissappears from that cell. The number 0 means the creep is no longer on that cell, but it was still there the previous generation.
A generation is a transition from one state of the creep to the next, where each piece of creep multiplies as much as possible.
Puzzle
This is a puzzle, so you should be able to figure out from sample and fixed tests:
in which directions creep multiplies
how creep decays over time
how creep merges with other creep
if you think order matters (it may, it may not ... )
the order in which one piece of creep multiplies before another
the order in which creep multiplies to different directions
to which cells creep can mulitply, based on state of room:
before current generation started
while current generation is ongoing
Input Constraints
Random tests; in each random test a variable number of generations are tested.

10 random tests with room sizes approx. 4x4
20 random tests with room sizes approx. 10x10
10 random tests with room sizes approx. 25x25
Examples
Use the sample and fixed as a tutorial to find out the behavior of creep.
Examples
Fixed Tests - Advanced cases - Case #1

Start:

###########
#5..#.5...#
#...#.....#
#.#.#.....#
#.........#

Generation #1:

###########
#44.#444..#
#4..#.4...#
#.#.#.....#
#.........#

Generation #2:

###########
#333#3333.#
#36.#636..#
#3#.#.3...#
#.........#

Generation #3:

###########
#222#22222#
#257#5257.#
#2#.#727..#
#2....2...#

Generation #4:

###########
#111#11111#
#146#41467#
#1#6#6169.#
#11..717..#

Generation #5:

###########
#000#00000#
#035#30356#
#0#5#50589#
#00566069.#

Generation #6:

###########
#...#.....#
#.24#2.245#
#.#4#4.478#
#..455.589#

Generation #7:

###########
#.13#1.134#
#113#12134#
#.#3#36367#
#.33448478#

... <more generations>
