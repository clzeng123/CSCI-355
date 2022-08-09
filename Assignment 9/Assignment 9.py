from subprocess import check_output


def run_cmd(command):
    return check_output(command, shell=True).decode()


def run_tracert(destination):
    lookup_ip = run_cmd("nslookup " + destination)
    print(lookup_ip + "\n\n")
    tracert_output = run_cmd("tracert " + destination)
    tracert_output = tracert_output.replace("\r", "")
    tracert_steps = tracert_output.split("\n")
    # print(tracert_steps)
    for i in range(4, len(tracert_steps) - 3):
        # print(i, tracert_steps[i])
        step = tracert_steps[i].strip()
        step = step.replace("\t", " ")
        step = step.replace("  ", " ")
        step = step.replace("  ", " ")
        step = step.replace("  ", " ")
        step = step.replace("*", "1 ms")
        step = step.split(' ')
        print(step)
        step_num = int(step[0])
        time_1 = int(step[1].replace("<", ""))
        time_2 = int(step[3].replace("<", ""))
        time_3 = int(step[5].replace("<", ""))
        avg_time = int((time_1 + time_2 + time_3) / 3)
        domain = step[7]
        ip_addr = step[8][1:-1]
        print(step_num, time_1, time_2, time_3, avg_time, domain, ip_addr)


run_tracert("gaia.cs.umass.edu")
run_tracert("google.com")
run_tracert("cs.qc.cuny.edu")
