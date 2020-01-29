import axios from 'axios'

export function getQeustionList(page_num){
    return axios.get('http://127.0.0.1:8000/qna/question/?page='+page_num);
}

export function getQeustion(question_id){
    return axios.get('http://127.0.0.1:8000/qna/question/'+question_id);
}

export function getAnswer(question_num){
    return axios.get('http://127.0.0.1:8000/qna/answer_list/'+question_num);
}