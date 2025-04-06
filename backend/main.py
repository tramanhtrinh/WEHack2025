from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
import sys

template = """Answer the question based on context:
{context}

Question: {question}
Answer:"""

try:
    model = OllamaLLM(model="llama3")
except Exception as e:
    print(f"Error connecting to Ollama: {e}")
    sys.exit(1)

prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

def handle_conversation():
    context = []
    print("Welcome! Type 'exit' to quit")
    while True:
        try:
            user_input = input("You: ")
            if user_input.lower() == "exit":
                break
            
            response = chain.invoke({
                "context": "\n".join(context),
                "question": user_input
            })
            print("Bot:", response)
            context.append(f"User: {user_input}\nAI: {response}")
            
        except KeyboardInterrupt:
            print("\nExiting...")
            break
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    handle_conversation()