// Discord Webhook 전송 유틸
export async function sendDiscord(msg: string) {
  const webhookUrl = 'https://discord.com/api/webhooks/1457563019012739154/P7CcIRLFMjBRDSRywPMbS7S3QaVRHkGVQDqi-QNhzYkFFj2vP-DvfnwaeB2a3DQVTtDJ' // TODO: 실제 웹훅 URL로 교체

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: msg }),
  })

  // Discord는 성공 시 204(No Content)를 주는 경우가 많음
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Webhook failed: ${res.status} ${text}`)
  }
}

