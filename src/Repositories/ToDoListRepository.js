export const GetList = () => {
    return JSON.parse(localStorage.getItem('toDoList')) ?? [];
}

export const SetList = (toDoList) => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

export const GetFilter = () => {
    return JSON.parse(localStorage.getItem('filter')) ?? 'All';
}

export const SetFilter = (filter) => {
    localStorage.setItem('filter', JSON.stringify(filter));
}

