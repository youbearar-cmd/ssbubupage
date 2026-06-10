import os, base64, json, urllib.request as req, getpass, re
from datetime import datetime

token = getpass.getpass('GitHub 토큰 입력: ')
owner = 'youbearar-cmd'
repo  = 'ssbubupage'
hdrs  = {'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json'}

FILES = [
    'index.html', 'medicines.html', 'detail.html', 'order.html',
    'form-first.html', 'form-revisit.html', 'admin.html',
    'qrcode.html', 'setup.html', 'style.css', 'data.js'
]

# HTML 파일에서 data.js 로드 URL에 버전 타임스탬프 삽입 (브라우저 캐시 무력화)
VERSION = datetime.now().strftime('%Y%m%d%H%M%S')
HTML_FILES = {f for f in FILES if f.endswith('.html')}

def get_content(fname):
    path = rf'C:\Users\user\hanui-program\{fname}'
    raw = open(path, 'rb').read()
    if fname in HTML_FILES:
        text = raw.decode('utf-8')
        # <script src="data.js"> 태그만 버전 교체 (JS 코드 내 문자열은 건드리지 않음)
        text = re.sub(r'(<script\s+src=["\'])data\.js(\?v=[^"\']*)?(["\'])', rf'\1data.js?v={VERSION}\3', text)
        return text.encode('utf-8')
    return raw

def upload(fname):
    path = rf'C:\Users\user\hanui-program\{fname}'
    if not os.path.exists(path):
        print(f'  건너뜀: {fname} (없음)')
        return
    url = f'https://api.github.com/repos/{owner}/{repo}/contents/{fname}'
    b64 = base64.b64encode(get_content(fname)).decode()
    try:
        cur = json.loads(req.urlopen(req.Request(url, headers=hdrs)).read())
        sha = cur.get('sha')
    except:
        sha = None
    body = {'message': f'Upload {fname}', 'content': b64}
    if sha:
        body['sha'] = sha
    r2 = req.Request(url, data=json.dumps(body).encode(),
                     headers={**hdrs, 'Content-Type': 'application/json'}, method='PUT')
    res = json.loads(req.urlopen(r2).read())
    print(f'  완료: {res["content"]["name"]}')

print(f'\nssbubupage 업로드 중... (캐시 버전: {VERSION})\n')
for f in FILES:
    upload(f)
print('\n완료! 1~2분 후 반영됩니다.')
