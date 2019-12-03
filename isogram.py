x = input()


def isogram(string):
    print(type(string.strip))
    if type(string) == int:
        print ("not workung")
    y = [x for x in string ]
    # for x in string:
    #     if x not in y:
    #         y.append(x)
    #         print(y)
    #     return y
    # return y
    print (y)

isogram(x)