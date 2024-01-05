const solution = (phone_number) => {
    let cnt = phone_number.length-4;
    let changeStr = phone_number.substr(0, cnt);
    return phone_number.replace(changeStr, '*'.repeat(cnt));
}