# ReversePolishNotationJS

So this is an implementation of ReversePolishNotation algorithm
it should get a string like this one - "1 2 3 + -"
if it gets only string full of ints or floats without any operands it will return only the last float or int.

Reverse Polish Notation is a stack which is processed from the tail and appended with new values to the tail too

so i.e. "1 4 +" will return 5

or "1 4 5 + " will update the stack "1 9" but return only 9

so the most right thing is to give "2 4 5 + *" does 4 + 5 and appends the stack with a result, the stack is " 2 9 *"
and the function will return 18
