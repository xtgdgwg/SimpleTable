import { PaginationProps } from '../typs'
import { toRefs, computed } from 'vue'

export default function usePageListener(props: PaginationProps, emit: Function) {
    let { currentPage, pageCount } = toRefs(props)
    //跳转分页具体位置
    function changeCurrentPage(num: number) {
        if (num <= 0 || num > pageCount.value || num === currentPage.value) {
            return
        }
        emit('current-change', num)
    }
    //上一页
    function nextPage() {
        changeCurrentPage(currentPage.value + 1)
    }
    //下一页
    function prePage() {
        changeCurrentPage(currentPage.value - 1)
    }

    return { changeCurrentPage, nextPage, prePage }
}