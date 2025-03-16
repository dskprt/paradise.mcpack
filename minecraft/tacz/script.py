from pathlib import Path

pathlist = Path(".").glob('tacz_default_gun/data/tacz/recipes/gun/*.json')

for path in pathlist:
    # because path is object not string
    path_in_str = str(path)
    print(path_in_str)

    filedata = ""

    with open(path_in_str, 'r') as file:
        filedata = file.read()

    # Replace the target string
    filedata = filedata.replace('forge:ingots/iron', 'forge:ingots/stainlesssteel')

    # Write the file out again
    with open(path_in_str, 'w') as file:
        file.write(filedata)

pathlist = Path(".").glob('tacz_default_gun/data/tacz/recipes/attachments/*.json')

for path in pathlist:
    # because path is object not string
    path_in_str = str(path)
    print(path_in_str)

    filedata = ""

    with open(path_in_str, 'r') as file:
        filedata = file.read()

    # Replace the target string
    filedata = filedata.replace('forge:ingots/iron', 'forge:ingots/steel')

    # Write the file out again
    with open(path_in_str, 'w') as file:
        file.write(filedata)
