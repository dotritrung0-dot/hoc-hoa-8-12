// Dữ liệu kiến thức Hóa học từ Mất gốc (Lớp 8) đến Lớp 12
const CHEMISTRY_DATA = {
  stages: [
    {
      id: "stage-1",
      grade: "Lớp 8 - Lớp 9",
      tag: "Mất gốc & Nền tảng",
      title: "Chặng 1: Nền tảng Hóa học & Khái niệm cơ sở",
      desc: "Xây dựng lại gốc rễ: Nguyên tử, Phân tử, Hóa trị, Mol, Phương trình và Phân loại chất",
      color: "#2563eb",
      lessons: [
        {
          id: "bai-1",
          title: "1. Nguyên tử, Nguyên tố & Hóa trị",
          level: "Cơ bản",
          readTime: "7 phút",
          summary: "Hiểu bản chất proton, nơtron, electron, phân biệt đơn chất - hợp chất và mẹo nhớ bảng hóa trị bằng thơ.",
          content: `
### I. Cấu tạo nguyên tử & Nguyên tố
- **Nguyên tử** gồm:
  - Hạt nhân mang điện tích dương: **Proton** ($p^+$ mang điện $+1$) và **Nơtron** ($n^0$ không mang điện).
  - Vỏ nguyên tử mang điện tích âm: **Electron** ($e^-$ mang điện $-1$).
  - Trong nguyên tử trung hòa về điện: **Số $p$ = Số $e$**.
- **Khối lượng nguyên tử:** Tập trung gần như toàn bộ ở hạt nhân ($m_{\\text{nguyên tử}} \\approx m_p + m_n$) vì $m_e$ rất nhỏ.
- **Nguyên tố hóa học:** Tập hợp các nguyên tử có cùng số proton trong hạt nhân.

---

### II. Hóa trị & Quy tắc hóa trị
- Hóa trị là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác.
- **Quy tắc hóa trị:** Trong hợp chất $A_x B_y$ (với $A$ hóa trị $a$, $B$ hóa trị $b$):
  $$x \\cdot a = y \\cdot b$$
- **Bài ca hóa trị (Mẹo nhớ cực nhanh):**
  > *Kali, Iốt, Hiđro*  
  > *Natri với Bạc, Clo một loài (Hóa trị I)*  
  > *Là hóa trị I bạn ơi*  
  > *Nhớ ghi cho kỹ kẻo rồi phân vân*  
  > *Magiê, Chì, Kẽm, Thủy ngân*  
  > *Canxi, Đồng, Thiếc thêm phần Bari (Hóa trị II)*  
  > *Cuối cùng thêm chú Oxi*  
  > *Hóa trị II nhớ có gì khó khăn*  
  > *Bác Nhôm hóa trị III lần (Nhôm hóa trị III)*  
  > *Sắt kia biến đổi hai, ba thất thường (Fe hóa trị II, III)*
          `,
          keyTakeaways: [
            "Số p = Số e (trung hòa điện)",
            "Quy tắc hóa trị: a.x = b.y",
            "Nhóm I: Na, K, Ag, H. Nhóm II: Mg, Ca, Ba, Zn, Cu, Fe(II). Nhóm III: Al, Fe(III)"
          ],
          quiz: [
            {
              question: "Trong hợp chất Al₂O₃, nguyên tố Nhôm (Al) có hóa trị mấy?",
              options: ["I", "II", "III", "IV"],
              correctIndex: 2,
              explanation: "Oxi có hóa trị II. Áp dụng quy tắc hóa trị: 2 * a = 3 * 2 => a = 3 (Nhôm hóa trị III)."
            },
            {
              question: "Hạt nào trong nguyên tử KHÔNG mang điện tích?",
              options: ["Proton", "Nơtron", "Electron", "Hạt nhân"],
              correctIndex: 1,
              explanation: "Nơtron (neutron) nằm trong hạt nhân và không mang điện tích."
            }
          ]
        },
        {
          id: "bai-2",
          title: "2. Số Mol & Các công thức tính toán cốt lõi",
          level: "Cốt lõi",
          readTime: "8 phút",
          summary: "Chìa khóa giải quyết 90% bài tập Hóa: Định nghĩa mol, khối lượng mol và 4 công thức bất biến.",
          content: `
### I. Mol là gì?
- **Mol** là lượng chất có chứa $6{,}022 \\times 10^{23}$ hạt vi mô (nguyên tử hoặc phân tử). Con số này gọi là số Avogadro ($N_A$).

---

### II. 4 Công thức tính mol sống còn
1. **Theo khối lượng ($m$ gam):**
   $$n = \\frac{m}{M} \\quad \\iff \\quad m = n \\times M$$
   *(với $M$ là khối lượng mol nguyên tử/phân tử, đvC hoặc g/mol)*

2. **Theo thể tích khí ở điều kiện chuẩn:**
   - *Chuẩn cũ (0°C, 1 atm):* $n = \\frac{V}{22{,}4}$
   - *Chuẩn mới IUPAC/SGK mới (25°C, 1 bar):* $n = \\frac{V}{24{,}79}$

3. **Theo nồng độ mol dung dịch ($C_M$ hoặc $M$):**
   $$C_M = \\frac{n}{V_{\\text{dd (lít)}}} \\quad \\iff \\quad n = C_M \\times V_{\\text{dd}}$$

4. **Theo nồng độ phần trăm ($C\\%$):**
   $$C\\% = \\frac{m_{\\text{chất tan}}}{m_{\\text{dung dịch}}} \\times 100\\%$$
   *(với $m_{\\text{dd}} = m_{\\text{chất tan}} + m_{\\text{nước}}$ hoặc $m_{\\text{dd}} = V \\times d$)*
          `,
          keyTakeaways: [
            "n = m / M (tính theo gam)",
            "n = V / 22.4 (hoặc 24.79 ở chuẩn mới)",
            "n = CM * V(lít)",
            "C% = (m_ct / m_dd) * 100%"
          ],
          quiz: [
            {
              question: "Số mol của 5,6 gam Sắt (Fe, M = 56 g/mol) là bao nhiêu?",
              options: ["0.01 mol", "0.1 mol", "1 mol", "0.56 mol"],
              correctIndex: 1,
              explanation: "n = m / M = 5.6 / 56 = 0.1 mol."
            },
            {
              question: "Hòa tan 0.2 mol NaCl vào nước được 500 ml dung dịch. Nồng độ mol (CM) là:",
              options: ["0.1 M", "0.2 M", "0.4 M", "0.04 M"],
              correctIndex: 2,
              explanation: "V = 500 ml = 0.5 lít. CM = n / V = 0.2 / 0.5 = 0.4 M."
            }
          ]
        },
        {
          id: "bai-3",
          title: "3. Phân loại hợp chất vô cơ (Oxit, Axit, Bazơ, Muối)",
          level: "Cơ bản",
          readTime: "9 phút",
          summary: "Nhận diện 4 nhóm chất chính, tính chất hóa học và phương trình phản ứng trao đổi.",
          content: `
### I. 4 Nhóm chất vô cơ
1. **Oxit:** Hợp chất của Oxi với nguyên tố khác ($M_xO_y$).
   - *Oxit axit:* Thường là oxit phi kim ($CO_2, SO_2, P_2O_5, SO_3...$)
   - *Oxit bazơ:* Thường là oxit kim loại ($Na_2O, CaO, BaO, Fe_2O_3...$)
2. **Axit:** Gồm nguyên tử $H$ liên kết gốc axit ($HCl, H_2SO_4, HNO_3...$). Làm quỳ tím chuyển **đỏ**.
3. **Bazơ:** Gồm kim loại liên kết nhóm $-OH$ ($NaOH, Ca(OH)_2, Cu(OH)_2...$). Bazơ tan (kiềm) làm quỳ tím chuyển **xanh**, phenolphthalein chuyển **hồng**.
4. **Muối:** Gồm kim loại (hoặc $NH_4^+$) liên kết gốc axit ($NaCl, CaCO_3, CuSO_4...$).

---

### II. Các phản ứng kinh điển cần nhớ
- $\\text{Axit} + \\text{Bazơ} \\rightarrow \\text{Muối} + \\text{H}_2\\text{O}$ (Phản ứng trung hòa)
- $\\text{Kim loại (trước H)} + \\text{Axit (loãng)} \\rightarrow \\text{Muối} + \\text{H}_2 \\uparrow$
- $\\text{Muối} + \\text{Axit} \\rightarrow \\text{Muối mới} + \\text{Axit mới}$ (điều kiện: có kết tủa hoặc bay hơi)
          `,
          keyTakeaways: [
            "Quỳ tím: Axit -> Đỏ; Bazơ tan -> Xanh",
            "Trung hòa: Axit + Bazơ -> Muối + Nước",
            "Điều kiện phản ứng trao đổi: Tạo kết tủa (↓), bay hơi (↑), hoặc chất điện ly yếu (H2O)"
          ],
          quiz: [
            {
              question: "Dung dịch nào sau đây làm quỳ tím đổi màu xanh?",
              options: ["HCl", "H2SO4", "NaOH", "NaCl"],
              correctIndex: 2,
              explanation: "NaOH là bazơ kiềm tan trong nước, làm quỳ tím hóa xanh."
            }
          ]
        }
      ]
    },
    {
      id: "stage-2",
      grade: "Lớp 9 - Lớp 10",
      tag: "Bước đệm & Cấu trúc",
      title: "Chặng 2: Kim loại, Bảng tuần hoàn & Phản ứng Oxi hóa - Khử",
      desc: "Nắm vững dãy hoạt động hóa học, cấu hình electron và phản ứng Oxi hóa khử quan trọng nhất cấp 3",
      color: "#059669",
      lessons: [
        {
          id: "bai-4",
          title: "4. Dãy hoạt động hóa học của Kim loại",
          level: "Cốt lõi",
          readTime: "7 phút",
          summary: "Câu thần chú ghi nhớ thứ tự kim loại, quy tắc đẩy kim loại ra khỏi muối.",
          content: `
### I. Dãy hoạt động hóa học
Thứ tự giảm dần độ hoạt động:
$$K > Na > Ba > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > (H) > Cu > Hg > Ag > Pt > Au$$

**Thần chú học thuộc:**
> **K**hi **N**ào **B**ạn **C**ần **M**ay **Á**o **Z**áp **S**ắt **N**hìn **S**ang **P**hố **H**ỏi **C**ửa **H**àng **Á** **P**hi **Â**u

---

### II. Quy tắc ứng dụng sống còn
1. **Tác dụng với nước ở nhiệt độ thường:** Chỉ có các kim loại mạnh đứng đầu: $K, Na, Ba, Ca$ (Khi Nào Bạn Cần).
   $$2Na + 2H_2O \\rightarrow 2NaOH + H_2 \\uparrow$$
2. **Tác dụng với dung dịch axit loãng ($HCl, H_2SO_4$ loãng):** Các kim loại đứng **TRƯỚC $H$** mới giải phóng $H_2$. ($Cu, Ag, Au$ không phản ứng).
3. **Kim loại đẩy kim loại ra khỏi muối:** Kim loại đứng trước đẩy kim loại đứng sau ra khỏi dung dịch muối (Trừ $K, Na, Ba, Ca$ vì chúng tác dụng với nước trước).
          `,
          keyTakeaways: [
            "Đứng trước H: Tác dụng axit thường sinh ra H2",
            "Đứng sau H (Cu, Ag, Au): Không tác dụng với HCl/H2SO4 loãng",
            "Đẩy muối: Kim loại mạnh hơn đẩy kim loại yếu hơn ra khỏi muối"
          ],
          quiz: [
            {
              question: "Kim loại nào sau đây KHÔNG tác dụng với dung dịch HCl?",
              options: ["Fe", "Zn", "Al", "Cu"],
              correctIndex: 3,
              explanation: "Đồng (Cu) đứng sau Hiđro trong dãy hoạt động hóa học nên không đẩy được H ra khỏi HCl."
            }
          ]
        },
        {
          id: "bai-5",
          title: "5. Bảng tuần hoàn & Cấu hình Electron",
          level: "Nâng cao THCS - 10",
          readTime: "8 phút",
          summary: "Cách viết cấu hình e, xác định chu kỳ, nhóm và quy luật biến đổi tuần hoàn.",
          content: `
### I. Thứ tự mức năng lượng (Klechkowski)
Thứ tự phân lớp electron theo năng lượng tăng dần:
$$1s \\; 2s \\; 2p \\; 3s \\; 3p \\; 4s \\; 3d \\; 4p \\; 5s...$$
*(Mẹo nhớ: Sáng Sớm Pha Sữa Pha Sữa Đi Pha Sữa...)*

- Số electron tối đa trong từng phân lớp: $s^2, p^6, d^{10}, f^{14}$.

---

### II. Xác định vị trí trong Bảng tuần hoàn
- **Ô nguyên tố:** = Số hiệu nguyên tử $Z$ (= Số proton = Số electron).
- **Chu kỳ:** = Số lớp electron (chu kỳ 1 đến 7).
- **Nhóm:**
  - Nhóm A: Số electron lớp ngoài cùng.
  - Kim loại kiềm (Nhóm IA), Kim loại kiềm thổ (Nhóm IIA), Halogen (Nhóm VIIA), Khí hiếm (Nhóm VIIIA).
          `,
          keyTakeaways: [
            "Thứ tự mức năng lượng: 1s 2s 2p 3s 3p 4s 3d...",
            "Số e lớp ngoài cùng = Số thứ tự nhóm A",
            "Số lớp e = Số thứ tự chu kỳ"
          ],
          quiz: [
            {
              question: "Nguyên tử Natri (Z = 11) có bao nhiêu electron ở lớp ngoài cùng?",
              options: ["1", "2", "8", "3"],
              correctIndex: 0,
              explanation: "Cấu hình e của Na: 1s² 2s² 2p⁶ 3s¹. Lớp ngoài cùng (lớp 3) có 1 electron."
            }
          ]
        },
        {
          id: "bai-6",
          title: "6. Phản ứng Oxi hóa - Khử & Định luật bảo toàn Electron",
          level: "Trọng tâm Lớp 10-12",
          readTime: "10 phút",
          summary: "Nguyên tắc cân bằng phản ứng oxi hóa khử và phương pháp bảo toàn electron giải nhanh bài tập.",
          content: `
### I. Khái niệm cốt tử: Khử cho - O nhận
- **Chất khử (chất bị oxi hóa):** Cho electron $\\rightarrow$ Số oxi hóa TĂNG sau phản ứng.
- **Chất oxi hóa (chất bị khử):** Nhận electron $\\rightarrow$ Số oxi hóa GIẢM sau phản ứng.
> **Khẩu quyết:** *"Khử Cho - O Nhận"* (Chất khử cho e, Oxi hóa nhận e).

---

### II. Định luật bảo toàn Electron (Vũ khí giải nhanh THPT)
Trong mọi phản ứng oxi hóa - khử, tổng số mol electron cho luôn bằng tổng số mol electron nhận:
$$\\sum n_{e \\text{ cho}} = \\sum n_{e \\text{ nhận}}$$

**Ví dụ:** Cho $a$ mol kim loại $M$ (hóa trị $n$) tác dụng với axit sinh ra khí $H_2$ ($b$ mol):
- Quá trình cho: $M \\rightarrow M^{n+} + n e \\implies n_e = n \\cdot a$
- Quá trình nhận: $2H^+ + 2e \\rightarrow H_2 \\implies n_e = 2 \\cdot b$
- Theo bảo toàn e: $n \\cdot a = 2 \\cdot b$.
          `,
          keyTakeaways: [
            "Khử Cho - O Nhận: Số oxh tăng là chất khử, số oxh giảm là chất oxi hóa",
            "Bảo toàn e: Tổng mol e cho = Tổng mol e nhận",
            "Là chìa khóa giải nhanh các bài toán axit HNO3, H2SO4 đặc"
          ],
          quiz: [
            {
              question: "Trong phản ứng: Zn + CuSO4 -> ZnSO4 + Cu, chất nào là chất khử?",
              options: ["Zn", "CuSO4", "ZnSO4", "Cu"],
              correctIndex: 0,
              explanation: "Zn có số oxi hóa từ 0 tăng lên +2 (nhường 2e) nên Zn là chất khử."
            }
          ]
        }
      ]
    },
    {
      id: "stage-3",
      grade: "Lớp 11",
      tag: "Vô cơ & Đại cương Hữu cơ",
      title: "Chặng 3: Sự điện ly, Phi kim & Hidrocacbon",
      desc: "Chinh phục tính toán pH, các hợp chất Nitơ, Photpho, Lưu huỳnh và mở đầu Hóa hữu cơ",
      color: "#d97706",
      lessons: [
        {
          id: "bai-7",
          title: "7. Sự điện ly & Thang đo pH",
          level: "Trọng tâm 11",
          readTime: "8 phút",
          summary: "Chất điện ly mạnh/yếu, định nghĩa pH, môi trường axit/trung tính/kiềm.",
          content: `
### I. Sự điện ly
- **Chất điện ly mạnh:** Phân ly hoàn toàn thành ion khi tan trong nước (Axit mạnh: $HCl, HNO_3, H_2SO_4$; Bazơ mạnh: $NaOH, KOH, Ba(OH)_2$; Hầu hết các muối tan).
- **Chất điện ly yếu:** Phân ly một phần ($CH_3COOH, HF, H_2S, NH_3...$).

---

### II. Thang đo pH & Công thức
$$\\text{pH} = -\\log[H^+] \\quad \\iff \\quad [H^+] = 10^{-\\text{pH}}$$
- $\\text{pH} < 7$: Môi trường **Axit** (nồng độ $[H^+] > 10^{-7}$).
- $\\text{pH} = 7$: Môi trường **Trung tính** ($[H^+] = 10^{-7}$).
- $\\text{pH} > 7$: Môi trường **Kiềm (Bazơ)** ($[H^+] < 10^{-7}, [OH^-] > 10^{-7}$).
- Tích số ion của nước: $[H^+] \\cdot [OH^-] = 10^{-14} \\implies \\text{pH} + \\text{pOH} = 14$.
          `,
          keyTakeaways: [
            "pH = -log[H+]",
            "pH < 7: Axit; pH = 7: Trung tính; pH > 7: Bazơ",
            "pH + pOH = 14"
          ],
          quiz: [
            {
              question: "Dung dịch có nồng độ [H+] = 10⁻³ M thì giá trị pH bằng bao nhiêu?",
              options: ["3", "11", "7", "10"],
              correctIndex: 0,
              explanation: "pH = -log[H+] = -log(10⁻³) = 3."
            }
          ]
        },
        {
          id: "bai-8",
          title: "8. Đại cương Hóa học Hữu cơ & Hidrocacbon",
          level: "Trọng tâm 11",
          readTime: "9 phút",
          summary: "Đồng đẳng, đồng phân, công thức tổng quát của Ankan, Anken, Ankin, Benzen.",
          content: `
### I. Khái niệm cơ bản hữu cơ
- **Đồng đẳng:** Các chất có cấu tạo tương tự nhau nhưng hơn kém nhau một hay nhiều nhóm $-CH_2-$.
- **Đồng phân:** Các chất có cùng công thức phân tử nhưng khác cấu tạo hóa học nên tính chất khác nhau.

---

### II. Bảng tổng hợp các Hidrocacbon quan trọng
1. **Ankan (Parafin):** $C_n H_{2n+2}$ ($n \\ge 1$). Chỉ chứa liên kết đơn.
   - *Phản ứng đặc trưng:* Phản ứng thế ($CH_4 + Cl_2 \\xrightarrow{as} CH_3Cl + HCl$).
2. **Anken (Olefin):** $C_n H_{2n}$ ($n \\ge 2$). Có 1 liên kết đôi $C=C$.
   - *Phản ứng đặc trưng:* Phản ứng cộng (làm mất màu nước Brom: $C_2H_4 + Br_2 \\rightarrow C_2H_4Br_2$).
3. **Ankin:** $C_n H_{2n-2}$ ($n \\ge 2$). Có 1 liên kết ba $C \\equiv C$.
   - Có phản ứng thế ion kim loại nếu có nối ba đầu mạch (ank-1-in tác dụng với $AgNO_3/NH_3$ tạo kết tủa vàng).
4. **Aren (Benzen & đồng đẳng):** $C_n H_{2n-6}$ ($n \\ge 6$). Vòng thơm đặc trưng (dễ thế, khó cộng).
          `,
          keyTakeaways: [
            "Ankan: CnH2n+2 (liên kết đơn, phản ứng thế)",
            "Anken: CnH2n (liên kết đôi, làm mất màu Brom)",
            "Ankin: CnH2n-2 (liên kết ba, ank-1-in + AgNO3/NH3 tạo kết tủa)"
          ],
          quiz: [
            {
              question: "Chất nào sau đây làm mất màu dung dịch Brom ở điều kiện thường?",
              options: ["Metan (CH4)", "Etilen (C2H4)", "Etan (C2H6)", "Propan (C3H8)"],
              correctIndex: 1,
              explanation: "Etilen (C2H4) có liên kết đôi C=C kém bền nên dễ dàng tham gia phản ứng cộng làm mất màu nước Brom."
            }
          ]
        }
      ]
    },
    {
      id: "stage-4",
      grade: "Lớp 12",
      tag: "Trọng tâm Ôn thi THPT",
      title: "Chặng 4: Este - Lipit, Cacbohidrat, Amin & Polime",
      desc: "Chương trình cốt lõi thi Tốt nghiệp THPT & Đánh giá năng lực: Toàn bộ hữu cơ và kim loại lớp 12",
      color: "#7c3aed",
      lessons: [
        {
          id: "bai-9",
          title: "9. Este & Lipit (Chất béo)",
          level: "Cực kỳ trọng tâm 12",
          readTime: "9 phút",
          summary: "Công thức este, phản ứng thủy phân trong môi trường axit và kiềm (xà phòng hóa).",
          content: `
### I. Este
- **Công thức este đơn chức no, mạch hở:** $C_n H_{2n} O_2$ ($n \\ge 2$).
- Cấu tạo chung: $R - COO - R'$ (với $R'$ khác $H$).
- **Phản ứng thủy phân:**
  - *Trong môi trường axit (thuận nghịch):*
    $$RCOOR' + H_2O \\xrightleftharpoons{H^+, t^\\circ} RCOOH + R'OH$$
  - *Trong môi trường kiềm (Xà phòng hóa - một chiều):*
    $$RCOOR' + NaOH \\xrightarrow{t^\\circ} RCOONa + R'OH$$

---

### II. Lipit (Chất béo / Triglixerit)
- Là trieste của glixerol với axit béo: $(RCOO)_3C_3H_5$.
- Các gốc axit béo thường gặp:
  - Axit Panmitic: $C_{15}H_{31}COOH$ ($M = 256$, no)
  - Axit Stearic: $C_{17}H_{35}COOH$ ($M = 284$, no)
  - Axit Oleic: $C_{17}H_{33}COOH$ ($M = 282$, 1 nối đôi $C=C$, không no)
- **Phản ứng xà phòng hóa:**
  $$(RCOO)_3C_3H_5 + 3NaOH \\xrightarrow{t^\\circ} 3RCOONa + C_3H_5(OH)_3$$
          `,
          keyTakeaways: [
            "Este no đơn chức mạch hở: CnH2nO2 (n >= 2)",
            "Thủy phân kiềm là phản ứng 1 chiều (xà phòng hóa)",
            "Chất béo + 3NaOH -> 3 Muối (xà phòng) + 1 Glixerol"
          ],
          quiz: [
            {
              question: "Thủy phân etyl axetat (CH3COOC2H5) trong dung dịch NaOH thu được ancol nào?",
              options: ["CH3OH", "C2H5OH", "C3H7OH", "C2H4(OH)2"],
              correctIndex: 1,
              explanation: "CH3COOC2H5 + NaOH -> CH3COONa + C2H5OH (ancol etylic)."
            }
          ]
        },
        {
          id: "bai-10",
          title: "10. Cacbohidrat (Đường, Tinh bột & Xenlulozo)",
          level: "Trọng tâm 12",
          readTime: "8 phút",
          summary: "Phân loại Monosaccarit, Đisaccarit, Polisaccarit và các phản ứng tráng bạc, iốt.",
          content: `
### I. Phân loại Cacbohidrat
1. **Monosaccarit:** Không bị thủy phân.
   - **Glucozơ** ($C_6H_{12}O_6$): Có nhiều nhóm $-OH$ kề nhau và 1 nhóm anđehit $-CHO$. Tham gia phản ứng tráng bạc ($+ 2AgNO_3/NH_3 \\rightarrow 2Ag \\downarrow$).
   - **Fructozơ** ($C_6H_{12}O_6$): Đồng phân của glucozơ, trong môi trường kiềm chuyển hóa thành glucozơ nên cũng tráng bạc.
2. **Đisaccarit:** Thủy phân tạo 2 phân tử monosaccarit.
   - **Saccarozơ** ($C_{12}H_{22}O_{11}$): Gồm 1 gốc $\\alpha$-glucozơ + 1 gốc $\\beta$-fructozơ. Không tráng bạc trực tiếp.
3. **Polisaccarit:** Thủy phân tạo nhiều gốc glucozơ.
   - **Tinh bột** ($(C_6H_{10}O_5)_n$): Tác dụng với $I_2$ cho hợp chất màu **xanh tím**.
   - **Xenlulozơ** ($[C_6H_7O_2(OH)_3]_n$): Tạo màng tế bào thực vật, dùng chế tạo tơ nhân tạo và thuốc súng không khói.
          `,
          keyTakeaways: [
            "Glucozo tráng bạc tạo 2 Ag kết tủa",
            "Tinh bột nhận biết bằng dung dịch Iot (hóa xanh tím)",
            "Saccarozo không tráng bạc nhưng khi thủy phân thì sản phẩm có tráng bạc"
          ],
          quiz: [
            {
              question: "Thuốc thử dùng để nhận biết hồ tinh bột là:",
              options: ["Dung dịch AgNO3/NH3", "Dung dịch Iot (I2)", "Dung dịch NaOH", "Quỳ tím"],
              correctIndex: 1,
              explanation: "Tinh bột tạo với dung dịch iot hợp chất có màu xanh tím đặc trưng."
            }
          ]
        },
        {
          id: "bai-11",
          title: "11. Amin, Amino Axit & Protein",
          level: "Nâng cao 12",
          readTime: "10 phút",
          summary: "Tính bazơ của amin, tính lưỡng tính của amino axit và phản ứng màu biure.",
          content: `
### I. Amin
- Công thức tổng quát: R-NH2 (bậc 1), R-NH-R' (bậc 2), R-N(R')-R'' (bậc 3).
- **Tính bazơ:** Amin có tính bazơ do cặp electron tự do trên nguyên tử Nitơ.
- Lực bazơ so sánh:
  $$\\text{Amin no bậc 2} > \\text{Amin no bậc 1} > NH_3 > \\text{Anilin } (C_6H_5NH_2)$$
- Anilin không làm đổi màu quỳ tím nhưng tác dụng nước Brom tạo kết tủa trắng.

---

### II. Amino Axit
- Chứa đồng thời nhóm amino ($-NH_2$ mang tính bazơ) và nhóm cacboxyl ($-COOH$ mang tính axit).
- **Tính chất lưỡng tính:** Tác dụng được cả với axit mạnh và bazơ mạnh.
- Các amino axit chuẩn cần thuộc:
  - **Glyxin:** $H_2N-CH_2-COOH$ ($M = 75$)
  - **Alanin:** $CH_3-CH(NH_2)-COOH$ ($M = 89$)
  - **Valin:** $(CH_3)_2CH-CH(NH_2)-COOH$ ($M = 117$)
  - **Axit glutamic:** 1 nhóm $-NH_2$, 2 nhóm $-COOH$ (làm quỳ hóa đỏ, $M=147$)
  - **Lysin:** 2 nhóm $-NH_2$, 1 nhóm $-COOH$ (làm quỳ hóa xanh, $M=146$)

---

### III. Peptit & Protein
- Peptit chứa từ 2 đến 50 gốc $\\alpha$-amino axit nối với nhau bằng liên kết peptit ($-CO-NH-$).
- **Phản ứng màu biure:** Peptit có từ 2 liên kết peptit trở lên (tripeptit trở lên) tác dụng $Cu(OH)_2$ trong môi trường kiềm cho màu **tím đặc trưng** (đipeptit không có phản ứng này).
          `,
          keyTakeaways: [
            "Amino axit có tính chất lưỡng tính (vừa tác dụng axit, vừa tác dụng bazơ)",
            "Glyxin (75), Alanin (89), Axit Glutamic (147, quỳ đỏ), Lysin (146, quỳ xanh)",
            "Phản ứng màu biure: Tripeptit trở lên tác dụng Cu(OH)2 ra màu tím"
          ],
          quiz: [
            {
              question: "Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu đỏ?",
              options: ["Glyxin", "Lysin", "Axit glutamic", "Alanin"],
              correctIndex: 2,
              explanation: "Axit glutamic có 2 nhóm -COOH và 1 nhóm -NH2 nên dung dịch có tính axit, làm quỳ tím hóa đỏ."
            }
          ]
        }
      ]
    },
    {
      id: "stage-5",
      grade: "Lớp 12 & Thi ĐGNL/THPTQG",
      tag: "Bí kíp Giải nhanh",
      title: "Chặng 5: 4 Định luật bảo toàn & Công thức tính nhanh",
      desc: "Bộ công cụ thần tốc giải trắc nghiệm Hóa học: Bảo toàn khối lượng, nguyên tố, điện tích và electron",
      color: "#e11d48",
      lessons: [
        {
          id: "bai-12",
          title: "12. 4 Định luật Bảo toàn Vạn năng",
          level: "Tối thượng THPT",
          readTime: "9 phút",
          summary: "Bộ 4 định luật cốt lõi giúp giải quyết các bài toán vô cơ và hữu cơ phức tạp chỉ trong vài dòng.",
          content: `
### 1. Bảo toàn khối lượng (BTKL)
$$\\sum m_{\\text{tham gia}} = \\sum m_{\\text{sản phẩm}}$$
- Mở rộng: $m_{\\text{muối}} = m_{\\text{kim loại}} + m_{\\text{gốc axit}}$
- Với kim loại phản ứng $HCl$: $m_{\\text{muối}} = m_{\\text{KL}} + 71 \\cdot n_{H_2}$
- Với kim loại phản ứng $H_2SO_4$ loãng: $m_{\\text{muối}} = m_{\\text{KL}} + 96 \\cdot n_{H_2}$

---

### 2. Bảo toàn nguyên tố (BTNT)
Tổng số mol nguyên tố trước phản ứng = Tổng số mol nguyên tố sau phản ứng.
$$\\sum n_X \\text{ (ban đầu)} = \\sum n_X \\text{ (sản phẩm)}$$
- *Ví dụ:* Đốt cháy hợp chất hữu cơ:
  - $n_C = n_{CO_2}$
  - $n_H = 2 \\cdot n_{H_2O}$
  - $n_O = 2 \\cdot n_{CO_2} + n_{H_2O} - 2 \\cdot n_{O_2 \\text{ phản ứng}}$

---

### 3. Bảo toàn điện tích (BTĐT)
Trong bất kỳ dung dịch nào, tổng điện tích dương luôn bằng tổng điện tích âm:
$$\\sum (n_{\\text{cation}} \\times \\text{hóa trị}) = \\sum (n_{\\text{anion}} \\times \\text{hóa trị})$$
- *Ví dụ:* Dung dịch chứa $a$ mol $Na^+$, $b$ mol $Mg^{2+}$, $c$ mol $Cl^-$, $d$ mol $SO_4^{2-}$:
  $$1 \\cdot a + 2 \\cdot b = 1 \\cdot c + 2 \\cdot d$$

---

### 4. Bảo toàn Electron (BTe)
$$\\sum n_{e \\text{ nhường}} = \\sum n_{e \\text{ nhận}}$$
          `,
          keyTakeaways: [
            "Khối lượng bảo toàn: m_trước = m_sau",
            "Bảo toàn nguyên tố: n_C = n_CO2, n_H = 2*n_H2O",
            "Bảo toàn điện tích: Tổng điện tích dương = Tổng điện tích âm",
            "Bảo toàn e: Tổng mol e cho = Tổng mol e nhận"
          ],
          quiz: [
            {
              question: "Dung dịch X chứa 0.1 mol Fe³⁺, 0.2 mol Al³⁺, x mol Cl⁻ và 0.2 mol SO₄²⁻. Giá trị của x là:",
              options: ["0.3", "0.5", "0.9", "0.4"],
              correctIndex: 1,
              explanation: "Áp dụng BTĐT: 0.1*3 + 0.2*3 = x*1 + 0.2*2 <=> 0.3 + 0.6 = x + 0.4 <=> x = 0.5."
            }
          ]
        }
      ]
    }
  ],

  // Bảng tuần hoàn tóm tắt các nguyên tố thông dụng (mobile-friendly)
  elements: [
    { z: 1, sym: "H", name: "Hiđro", m: 1.008, val: "I", cat: "Phi kim", color: "#60a5fa" },
    { z: 2, sym: "He", name: "Heli", m: 4.003, val: "0", cat: "Khí hiếm", color: "#c084fc" },
    { z: 3, sym: "Li", name: "Liti", m: 6.941, val: "I", cat: "Kim loại kiềm", color: "#f87171" },
    { z: 4, sym: "Be", name: "Beri", m: 9.012, val: "II", cat: "Kiềm thổ", color: "#fb923c" },
    { z: 5, sym: "B", name: "Bo", m: 10.81, val: "III", cat: "Phi kim", color: "#60a5fa" },
    { z: 6, sym: "C", name: "Cacbon", m: 12.01, val: "II, IV", cat: "Phi kim", color: "#60a5fa" },
    { z: 7, sym: "N", name: "Nitơ", m: 14.01, val: "I, II, III, IV, V", cat: "Phi kim", color: "#60a5fa" },
    { z: 8, sym: "O", name: "Oxi", m: 16.00, val: "II", cat: "Phi kim", color: "#60a5fa" },
    { z: 9, sym: "F", name: "Flo", m: 19.00, val: "I", cat: "Halogen", color: "#34d399" },
    { z: 10, sym: "Ne", name: "Neon", m: 20.18, val: "0", cat: "Khí hiếm", color: "#c084fc" },
    { z: 11, sym: "Na", name: "Natri", m: 22.99, val: "I", cat: "Kim loại kiềm", color: "#f87171" },
    { z: 12, sym: "Mg", name: "Magiê", m: 24.31, val: "II", cat: "Kiềm thổ", color: "#fb923c" },
    { z: 13, sym: "Al", name: "Nhôm", m: 26.98, val: "III", cat: "Kim loại cơ bản", color: "#fbbf24" },
    { z: 14, sym: "Si", name: "Silic", m: 28.09, val: "IV", cat: "Á kim", color: "#a3e635" },
    { z: 15, sym: "P", name: "Photpho", m: 30.97, val: "III, V", cat: "Phi kim", color: "#60a5fa" },
    { z: 16, sym: "S", name: "Lưu huỳnh", m: 32.07, val: "II, IV, VI", cat: "Phi kim", color: "#60a5fa" },
    { z: 17, sym: "Cl", name: "Clo", m: 35.45, val: "I, III, V, VII", cat: "Halogen", color: "#34d399" },
    { z: 18, sym: "Ar", name: "Argon", m: 39.95, val: "0", cat: "Khí hiếm", color: "#c084fc" },
    { z: 19, sym: "K", name: "Kali", m: 39.10, val: "I", cat: "Kim loại kiềm", color: "#f87171" },
    { z: 20, sym: "Ca", name: "Canxi", m: 40.08, val: "II", cat: "Kiềm thổ", color: "#fb923c" },
    { z: 24, sym: "Cr", name: "Crom", m: 52.00, val: "II, III, VI", cat: "Kim loại chuyển tiếp", color: "#38bdf8" },
    { z: 25, sym: "Mn", name: "Mangan", m: 54.94, val: "II, IV, VII", cat: "Kim loại chuyển tiếp", color: "#38bdf8" },
    { z: 26, sym: "Fe", name: "Sắt", m: 55.85, val: "II, III", cat: "Kim loại chuyển tiếp", color: "#38bdf8" },
    { z: 29, sym: "Cu", name: "Đồng", m: 63.55, val: "I, II", cat: "Kim loại chuyển tiếp", color: "#38bdf8" },
    { z: 30, sym: "Zn", name: "Kẽm", m: 65.38, val: "II", cat: "Kim loại chuyển tiếp", color: "#38bdf8" },
    { z: 35, sym: "Br", name: "Brom", m: 79.90, val: "I, V", cat: "Halogen", color: "#34d399" },
    { z: 47, sym: "Ag", name: "Bạc", m: 107.87, val: "I", cat: "Kim loại chuyển tiếp", color: "#38bdf8" },
    { z: 56, sym: "Ba", name: "Bari", m: 137.33, val: "II", cat: "Kiềm thổ", color: "#fb923c" },
    { z: 79, sym: "Au", name: "Vàng", m: 196.97, val: "III", cat: "Kim loại chuyển tiếp", color: "#38bdf8" },
    { z: 82, sym: "Pb", name: "Chì", m: 207.2, val: "II, IV", cat: "Kim loại cơ bản", color: "#fbbf24" }
  ],

  // Bảng tính tan thông dụng
  solubility: [
    { ion: "NO₃⁻ (Nitrat)", note: "Tất cả các muối nitrat đều TAN", type: "tan" },
    { ion: "Na⁺, K⁺, NH₄⁺", note: "Hầu hết các muối của Na, K, NH₄ đều TAN", type: "tan" },
    { ion: "Cl⁻ (Clorua)", note: "Hầu hết tan, trừ AgCl ↓ (trắng), PbCl₂ ít tan", type: "mixed" },
    { ion: "SO₄²⁻ (Sunfat)", note: "Hầu hết tan, trừ BaSO₄ ↓ (trắng), PbSO₄ ↓, CaSO₄ ít tan", type: "mixed" },
    { ion: "CO₃²⁻, SO₃²⁻, PO₄³⁻", note: "Chỉ tan với Na⁺, K⁺, NH₄⁺; còn lại hầu hết KẾT TỦA", type: "ket-tua" },
    { ion: "S²⁻ (Sunfua)", note: "Tan với Na, K, Ba, Ca; còn lại kết tủa (CuS, PbS, FeS ↓ đen)", type: "ket-tua" },
    { ion: "OH⁻ (Hiđroxit)", note: "Chỉ bazơ Na, K, Ba, Ca tan; còn lại kết tủa (Cu(OH)₂ xanh, Fe(OH)₃ nâu đỏ)", type: "ket-tua" }
  ]
};
