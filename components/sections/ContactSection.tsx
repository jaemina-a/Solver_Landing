'use client'

import { useState } from 'react'
import { sendDiscord } from '@/lib/sendDiscord'

/**
 * ContactSection - 상담신청 섹션
 * 
 * 와요 도입을 위한 상담신청 폼을 제공하는 섹션
 */
export default function ContactSection() {
  const collaborationTools = [
    'Notion',
    'Slack',
    'Discord',
    'Jira',
    'ClickUp',
    'Asana',
    'Trello',
    'Google Workspace',
    'Confluence',
  ]

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [contact, setContact] = useState('') // 이메일/연락처
  const [requirements, setRequirements] = useState('')
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    )
  }

  const handleSubmit = async () => {
    if (submitting) return
    const msg = requirements.trim()
    const payload = [
      `대표자명: ${name.trim() || '미입력'}`,
      `기업명: ${company.trim() || '미입력'}`,
      `연락처: ${contact.trim() || '미입력'}`,
      `사용하는 협업도구: ${
        selectedTools.length ? selectedTools.join(', ') : '미선택'
      }`,
      '',
      `요구사항: ${msg || '미입력'}`,
    ].join('\n')

    if (!msg && !name && !company && !contact && selectedTools.length === 0) return
    try {
      setSubmitting(true)
      await sendDiscord(payload)
      setName('')
      setCompany('')
      setContact('')
      setRequirements('')
      setSelectedTools([])
      setShowConfirm(false)
    } catch (e) {
      console.error(e)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contact-section"
      className="py-[20px] relative bg-gradient-to-b from-black-low to-navy-dark flex items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* 폼 컨테이너 */}
        <div className="bg-gradient-to-b from-[rgba(249,246,238,0.8)] to-[rgba(250,249,246,0.8)] border-[0.5px] border-[rgba(0,0,0,0.25)] border-solid rounded-[12px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12)] p-5 w-full">
          {/* 제목 */}
          <h2 className="text-[24px] font-bold text-[#1d1d1f] mb-[30px]">
            상담신청
          </h2>

          <div className="flex flex-col gap-[30px]">
            {/* 입력 필드 섹션 */}
            <div className="flex items-start justify-between flex-wrap">
              {/* 왼쪽 열 */}
              <div className="flex flex-col gap-4">
                {/* 대표자 성함 */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-black leading-none">
                    대표자 성함
                  </label>
                  <div className="bg-white border border-[rgba(0,0,0,0.12)] border-solid rounded-[8px] p-[10px] w-[140px]">
                    <input
                      type="text"
                      placeholder="배정원"
                      className="w-full text-[12px] font-semibold text-black leading-none outline-none bg-transparent placeholder:text-[#a8a8a8]"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* 이메일/연락처 */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-black leading-none">
                    연락처 (이메일/전화)
                  </label>
                  <div className="bg-white border border-[rgba(0,0,0,0.12)] border-solid rounded-[8px] p-[10px] w-[140px]">
                    <input
                      type="text"
                      placeholder="example@gmail.com / 010-1234-5678"
                      className="w-full text-[12px] font-semibold text-black leading-none outline-none bg-transparent placeholder:text-[#a8a8a8]"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* 오른쪽 열 */}
              <div className="flex flex-col items-center">
                {/* 기업명 */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-black leading-none">
                    기업명
                  </label>
                  <div className="bg-white border border-[rgba(0,0,0,0.12)] border-solid rounded-[8px] p-[10px] w-[140px]">
                    <input
                      type="text"
                      placeholder="BlackCoconut"
                      className="w-full text-[12px] font-semibold text-black leading-none outline-none bg-transparent placeholder:text-[#a8a8a8]"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 사용하는 협업 도구 */}
            <div className="flex flex-col gap-[10px]">
              <label className="text-[16px] font-semibold text-black leading-[20px]">
                사용하는 협업 도구
              </label>
              <div className="flex flex-wrap gap-[10px]">
                {collaborationTools.map((tool) => (
                  <label
                    key={tool}
                    className="bg-white border-[0.5px] border-[rgba(0,0,0,0.12)] border-solid flex gap-[5px] items-center px-[10px] py-[5px] rounded-[4px] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-[15px] h-[15px] bg-[#fafaf7] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid rounded"
                      checked={selectedTools.includes(tool)}
                      onChange={() => toggleTool(tool)}
                    />
                    <span className="text-[12px] font-semibold text-black leading-[20px]">
                      {tool}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 요구 사항 */}
            <div className="flex flex-col gap-[10px]">
              <label className="text-[16px] font-semibold text-black leading-[20px] h-[20px]">
                요구 사항
              </label>
              <textarea
                placeholder="신입사원이 해줬으면 하는 일을 작성해주세요. (ex. 경리 업무, 프로젝트 개발 업무, 프로젝트 매니징 및 회사 지적자산 관리 등) 추가로 블랙코코넛의 서비스 와요에게 요청할 사항을 자유롭게 작성해주세요."
                className="bg-white border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[250px] p-[10px] rounded-[8px] resize-none outline-none text-[10px] font-extralight text-black leading-[20px] placeholder:text-[#a8a8a8]"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              />
            </div>

            {/* 제출 버튼 */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowConfirm(true)}
                disabled={submitting}
                className="bg-gradient-to-b from-black-low to-navy-dark text-white-bone-regularAlt text-[12px] font-semibold px-5 py-2 rounded-[8px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                제출하기
              </button>
            </div>
          </div>
        </div>

        {/* 최종 확인 모달 */}
        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-black mb-3">제출 확인</h3>
              <p className="text-sm text-[#444] mb-4">
                입력하신 상담 정보를 제출하시겠습니까?
              </p>
              <div className="flex flex-col gap-1 text-[12px] text-[#222] bg-[#f7f7f7] rounded-lg p-3 mb-4">
                <div>대표자명: {name || '미입력'}</div>
                <div>기업명: {company || '미입력'}</div>
                <div>연락처: {contact || '미입력'}</div>
                <div>
                  사용하는 협업도구:{' '}
                  {selectedTools.length ? selectedTools.join(', ') : '미선택'}
                </div>
                <div className="whitespace-pre-wrap">요구사항: {requirements || '미입력'}</div>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 rounded-lg border border-[#d1d5db] text-sm text-[#374151] hover:bg-[#f3f4f6] transition"
                  disabled={submitting}
                >
                  취소
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-4 py-2 rounded-lg bg-gradient-to-b from-black-low to-navy-dark text-white-bone-regularAlt text-sm font-semibold shadow-[0px_2px_4px_rgba(0,0,0,0.12)] hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  최종 제출
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

