// 개별적으로 가져오는 것이 최적화에 큰 영향.
// JS 기본 내보내기로 기능.
import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'
import { options } from 'colorette'

// dropdown
const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

// modal
new Modal(document.querySelector('#exampleModal'), {
    // 배경을 클릭했을 때 modal이 꺼지지 않게 해줌.
    backdrop: 'static'
})