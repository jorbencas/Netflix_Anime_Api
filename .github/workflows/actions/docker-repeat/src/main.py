import os

#Get the input values
text = os.environ['INPUT_INPUT_TEXT']
numOfRequest = int(os.environ['INPUT_NUM_OF_REPEATS'])

outputText = ''
for i in range(numOfRequest):
    outputText += text

# set the output value
print(f"::set-output name=output_text::{outputText}")