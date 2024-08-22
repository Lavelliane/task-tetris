import { ChatOpenAI } from "@langchain/openai";
import { NextResponse } from "next/server";
import { z } from 'zod'

const outputSchema = z.object({
    subtasks: z.array(z.string().describe('A subtask of the given task'))
})

export async function POST(req){
    try {
        const body = await req.json()
        const { title, description, taskId } = body

        //Generate Subtasks
        const model = new ChatOpenAI({
            model: "gpt-4o",
            temperature: 0.5,
        })

        const subtaskLlm = model.withStructuredOutput(outputSchema)

        const generatedSubtasks = await subtaskLlm.invoke(`Based on ${title} and ${description} of this task. Generate an array of 5 subtasks`)

        let promises = []
        if(generatedSubtasks && generatedSubtasks.subtasks.length > 0){
            for(const subtask of generatedSubtasks.subtasks){
                promises.push(fetch('http://localhost:3000/api/subtask', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        title: subtask,
                        completed: false,
                        taskId: taskId
                    })
                }))
            }
        }

        await Promise.all(promises).then((result) => {
            if(result){
                return NextResponse.json({ message: 'Created subtasks' }, { status: 201 })
            }
        })

        return NextResponse.json({ message: 'Created subtasks' }, { status: 201 })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'An error has occurred' }, { status: 500 })
    }
}