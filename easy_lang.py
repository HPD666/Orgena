# easy_lang.py

variables = {}

def execute(line):
    line = line.strip()
    if line.startswith('say '):
        # Remove 'say ' and handle either a string or a variable
        content = line[4:].strip()
        if content.startswith('"') and content.endswith('"'):
            print(content[1:-1])
        elif content in variables:
            print(variables[content])
        else:
            print(f"Unknown variable or syntax: {content}")
    elif '=' in line:
        # Variable assignment
        var, value = line.split('=', 1)
        var = var.strip()
        value = value.strip()
        # Only handle numbers for now
        if value.isdigit():
            variables[var] = int(value)
        else:
            print("Only numbers supported for assignments right now.")
    else:
        print(f"Unknown command: {line}")

def main():
    print("EasyLang Interpreter. Type 'exit' to quit.")
    while True:
        line = input('> ')
        if line.strip() == 'exit':
            break
        execute(line)

if __name__ == "__main__":
    main()
