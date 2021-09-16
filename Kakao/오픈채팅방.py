def solution(record):
    answer = []
    data = []
    user = {}
    # record를 공백 기준으로 분리
    for i in record:
        data.append(i.split(' '))
    # Enter 혹은 Change일때, user의 value값 갱신 
    for i in data:
        if i[0] == 'Enter' or i[0] == 'Change':
            user[i[1]] = i[2]
    # data를 활용하여 출력
    for i in data:
        if i[0] == "Leave":
            answer.append(user[i[1]]+"님이 나갔습니다.")
        elif i[0] == "Enter":
            answer.append(user[i[1]]+"님이 들어왔습니다.")

    return answer


print(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo",
                "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))
