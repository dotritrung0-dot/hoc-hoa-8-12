const CHEMISTRY_DATA = {
  "stages": [
    {
      "id": "stage-1",
      "grade": "Lớp 8",
      "tag": "Mất gốc & Nền tảng",
      "title": "Chặng 1: Nền tảng Hóa học & Khái niệm Cơ sở (Lớp 8)",
      "desc": "Xây dựng lại gốc rễ: Nguyên tử, Nguyên tố, Hóa trị, Mol, Phương trình và Dung dịch",
      "color": "#2563eb",
      "lessons": [
        {
          "id": "lop8-bai1",
          "title": "1. Nguyên tử, Phân tử & Nguyên tố hóa học",
          "level": "Mất gốc",
          "readTime": "8 phút",
          "summary": "Cấu tạo hạt nhân (p, n), vỏ electron (e), phân biệt đơn chất - hợp chất và ký hiệu hóa học.",
          "content": "\n### I. Cấu tạo nguyên tử\nNguyên tử là hạt vô cùng nhỏ và trung hòa về điện. Cấu tạo gồm 2 phần:\n1. **Hạt nhân ở tâm:**\n   - **Proton (p):** Mang điện tích dương (+1). Khối lượng xấp xỉ 1 amu.\n   - **Nơtron (n):** Không mang điện tích. Khối lượng xấp xỉ 1 amu.\n2. **Lớp vỏ:**\n   - **Electron (e):** Mang điện tích âm (-1), chuyển động rất nhanh quanh hạt nhân. Khối lượng electron rất nhỏ (chỉ bằng khoảng 1/1836 khối lượng proton).\n- **Quy tắc trung hòa điện:** Trong mọi nguyên tử:\n  $$\\text{Số proton } (p) = \\text{Số electron } (e)$$\n- **Khối lượng nguyên tử:** Tập trung hầu hết ở hạt nhân:\n  $$m_{\\text{nguyên tử}} \\approx m_p + m_n$$\n\n---\n\n### II. Nguyên tố hóa học & Ký hiệu hóa học\n- **Nguyên tố hóa học** là tập hợp các nguyên tử có cùng số proton trong hạt nhân (cùng số hiệu nguyên tử Z).\n- Mỗi nguyên tố được biểu diễn bằng 1 hoặc 2 chữ cái: chữ cái đầu viết HOA, chữ cái thứ hai viết thường (Ví dụ: H, He, Na, Fe, Cu).\n\n---\n\n### III. Đơn chất và Hợp chất\n1. **Đơn chất:** Chất tạo nên từ **một** nguyên tố hóa học.\n   - *Kim loại:* Có ánh kim, dẫn điện, dẫn nhiệt (Fe, Cu, Al, Au, Na...).\n   - *Phi kim:* Không dẫn điện (trừ than chì), dẫn nhiệt kém (O₂, N₂, Cl₂, S, C...).\n2. **Hợp chất:** Chất tạo nên từ **hai hay nhiều** nguyên tố hóa học khác nhau kết hợp lại (H₂O, NaCl, H₂SO₄, CaCO₃).\n",
          "keyTakeaways": [
            "Số proton (p) = Số electron (e) trong nguyên tử trung hòa điện.",
            "Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân (p + n).",
            "Đơn chất tạo từ 1 nguyên tố; Hợp chất tạo từ 2 nguyên tố trở lên."
          ],
          "quiz": [
            {
              "question": "Trong nguyên tử trung hòa về điện, loại hạt nào mang điện tích âm?",
              "options": [
                "Proton",
                "Nơtron",
                "Electron",
                "Hạt nhân"
              ],
              "correctIndex": 2,
              "explanation": "Electron (e) mang điện tích âm (-1) và chuyển động ở lớp vỏ nguyên tử."
            },
            {
              "question": "Chất nào sau đây là đơn chất?",
              "options": [
                "Khí Oxi (O₂)",
                "Nước cất (H₂O)",
                "Muối ăn (NaCl)",
                "Khí Cacbonic (CO₂)"
              ],
              "correctIndex": 0,
              "explanation": "Khí oxi O₂ chỉ được tạo thành từ duy nhất 1 nguyên tố Oxi nên là đơn chất."
            }
          ]
        },
        {
          "id": "lop8-bai2",
          "title": "2. Hóa trị & Bài ca Hóa trị bất hủ",
          "level": "Cốt lõi",
          "readTime": "10 phút",
          "summary": "Quy tắc hóa trị a.x = b.y, lập công thức hóa học và mẹo thơ nhớ trọn bảng hóa trị.",
          "content": "\n### I. Định nghĩa Hóa trị\nHóa trị là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác.\n- Quy ước: Hóa trị của **H luôn bằng I**, hóa trị của **O luôn bằng II**.\n\n---\n\n### II. Quy tắc hóa trị\nTrong hợp chất dạng $A_x B_y$ (với nguyên tố A có hóa trị a, B có hóa trị b):\n$$x \\cdot a = y \\cdot b$$\n- **Ứng dụng tìm hóa trị:** Biết x, y và b => $a = \\frac{y \\cdot b}{x}$.\n  - *Ví dụ:* Tìm hóa trị của S trong $SO_3$: Ta có $1 \\cdot a = 3 \\cdot II \\implies a = VI$.\n- **Ứng dụng lập công thức hóa học:**\n  $$\\frac{x}{y} = \\frac{b}{a} \\quad \\text{(rút gọn về phân số tối giản)}$$\n  - *Ví dụ:* Lập CTHH của Nhôm (III) và Oxi (II): $\\frac{x}{y} = \\frac{II}{III} = \\frac{2}{3} \\implies \\text{Al}_2\\text{O}_3$.\n\n---\n\n### III. Bài Ca Hóa Trị (Thuộc lòng để lấy gốc)\n> *Kali, Iốt, Hiđro*  \n> *Natri với Bạc, Clo một loài (Hóa trị I)*  \n> *Là hóa trị I bạn ơi*  \n> *Nhớ ghi cho kỹ kẻo rồi phân vân*  \n> *Magiê, Chì, Kẽm, Thủy ngân*  \n> *Canxi, Đồng, Thiếc thêm phần Bari (Hóa trị II)*  \n> *Cuối cùng thêm chú Oxi*  \n> *Hóa trị II nhớ có gì khó khăn*  \n> *Bác Nhôm hóa trị III lần (Al hóa trị III)*  \n> *In sâu trí óc khi cần có ngay*  \n> *Sắt kia biến đổi hai, ba thất thường (Fe có hóa trị II và III)*  \n> *Cacbon, Silic tính trường hóa tư (IV)*\n",
          "keyTakeaways": [
            "Quy ước: H luôn hóa trị I, O luôn hóa trị II.",
            "Công thức AxBy: a.x = b.y.",
            "Hóa trị I thường gặp: Na, K, Ag, H, Cl.",
            "Hóa trị II thường gặp: Mg, Ca, Ba, Zn, Cu, Fe(II), O.",
            "Hóa trị III: Al, Fe(III)."
          ],
          "quiz": [
            {
              "question": "Trong hợp chất Fe₂O₃, nguyên tố Sắt (Fe) có hóa trị mấy?",
              "options": [
                "Hóa trị I",
                "Hóa trị II",
                "Hóa trị III",
                "Hóa trị VI"
              ],
              "correctIndex": 2,
              "explanation": "Oxi có hóa trị II. Áp dụng quy tắc hóa trị: 2 * a = 3 * 2 => a = 3. Sắt có hóa trị III."
            }
          ]
        },
        {
          "id": "lop8-bai3",
          "title": "3. Phản ứng Hóa học & Định luật Bảo toàn Khối lượng",
          "level": "Cốt lõi",
          "readTime": "8 phút",
          "summary": "Bản chất liên kết bị phá vỡ, các dấu hiệu phản ứng và định luật bảo toàn khối lượng (Lomonosov - Lavoisier).",
          "content": "\n### I. Bản chất phản ứng hóa học\n- Trong phản ứng hóa học, chỉ có **liên kết giữa các nguyên tử bị thay đổi**, làm cho phân tử này biến đổi thành phân tử khác.\n- **Số nguyên tử của mỗi nguyên tố giữ nguyên không đổi**.\n\n---\n\n### II. Định luật Bảo toàn khối lượng\n- **Nội dung:** Trong một phản ứng hóa học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng.\n$$\\sum m_{\\text{tham gia}} = \\sum m_{\\text{sản phẩm}}$$\n\n- **Ví dụ tổng quát:** Với phản ứng: $A + B \\rightarrow C + D$\n$$m_A + m_B = m_C + m_D$$\n- Nếu biết khối lượng của 3 chất bất kỳ, ta luôn tính được khối lượng chất còn lại.\n  - *Ví dụ:* Đốt cháy 12g Cacbon trong oxi sinh ra 44g $CO_2$. Khối lượng oxi đã phản ứng là:\n    $$m_{O_2} = m_{CO_2} - m_C = 44 - 12 = 32\\text{ gam}$$\n",
          "keyTakeaways": [
            "Phản ứng hóa học chỉ làm thay đổi liên kết, số nguyên tử mỗi nguyên tố bảo toàn.",
            "Định luật BTKL: Tổng m trước = Tổng m sau phản ứng."
          ],
          "quiz": [
            {
              "question": "Nung 100g đá vôi (CaCO₃) thu được 56g vôi sống (CaO) và khí CO₂. Khối lượng CO₂ thoát ra là:",
              "options": [
                "44g",
                "56g",
                "100g",
                "156g"
              ],
              "correctIndex": 0,
              "explanation": "Theo ĐLBTKL: m_CaCO3 = m_CaO + m_CO2 => m_CO2 = 100 - 56 = 44 gam."
            }
          ]
        },
        {
          "id": "lop8-bai4",
          "title": "4. Mol, Khối lượng Mol & Thể tích Mol chất khí",
          "level": "Cốt tử",
          "readTime": "10 phút",
          "summary": "Nắm vững khái niệm Mol, số Avogadro và 4 công thức tính toán kinh điển nhất môn Hóa.",
          "content": "\n### I. Mol là gì?\n- **Mol** là lượng chất có chứa $6{,}022 \\times 10^{23}$ nguyên tử hoặc phân tử của chất đó.\n- Con số $N_A = 6{,}022 \\times 10^{23}$ gọi là **số Avogadro**.\n\n---\n\n### II. Các công thức tính Mol cốt tử\n1. **Tính mol theo khối lượng ($m$ gam):**\n   $$n = \\frac{m}{M} \\quad \\iff \\quad m = n \\times M$$\n   *(M là khối lượng mol nguyên tử/phân tử, đvC hoặc g/mol)*\n\n2. **Tính mol chất khí theo thể tích ($V$ lít):**\n   - **Chuẩn cũ (0°C, 1 atm - ĐKTC):**\n     $$n = \\frac{V}{22{,}4} \\quad \\iff \\quad V = n \\times 22{,}4$$\n   - **Chuẩn mới (25°C, 1 bar - Chuẩn IUPAC hiện hành):**\n     $$n = \\frac{V}{24{,}79} \\quad \\iff \\quad V = n \\times 24{,}79$$\n\n3. **Tính số hạt vi mô ($A$):**\n   $$A = n \\times N_A = n \\times 6{,}022 \\times 10^{23}$$\n",
          "keyTakeaways": [
            "n = m / M (tính theo khối lượng gam)",
            "n = V / 22.4 (ở chuẩn cũ ĐKTC)",
            "n = V / 24.79 (ở chuẩn mới 25°C, 1 bar)",
            "m = n * M"
          ],
          "quiz": [
            {
              "question": "0.2 mol khí Oxi (O₂, M = 32) có khối lượng là bao nhiêu gam?",
              "options": [
                "3.2 gam",
                "6.4 gam",
                "16 gam",
                "64 gam"
              ],
              "correctIndex": 1,
              "explanation": "m = n * M = 0.2 * 32 = 6.4 gam."
            }
          ]
        },
        {
          "id": "lop8-bai5",
          "title": "5. Tỉ khối chất khí & Tính theo Phương trình hóa học",
          "level": "Cơ bản",
          "readTime": "8 phút",
          "summary": "Công thức tỉ khối dA/B, so sánh độ nặng nhẹ của khí với không khí (M_kk = 29) và các bước giải bài toán phương trình.",
          "content": "\n### I. Tỉ khối của chất khí\nTỉ khối cho biết khí A nặng hay nhẹ hơn khí B bao nhiêu lần:\n$$d_{A/B} = \\frac{M_A}{M_B}$$\n- **So với không khí ($M_{\\text{kk}} \\approx 29\\text{ g/mol}$):**\n  $$d_{A/\\text{kk}} = \\frac{M_A}{29}$$\n  - Nếu $d_{A/\\text{kk}} > 1$: Khí A nặng hơn không khí (đặt đứng bình thu khí).\n  - Nếu $d_{A/\\text{kk}} < 1$: Khí A nhẹ hơn không khí (đặt úp ngược bình thu khí, ví dụ khí $H_2, CH_4$).\n\n---\n\n### II. 3 Bước tính theo Phương trình hóa học\n1. **Bước 1:** Chuyển đổi dữ kiện đề bài ($m$ gam, $V$ lít) ra **số mol ($n$)**.\n2. **Bước 2:** Viết phương trình hóa học và **cân bằng chính xác**.\n3. **Bước 3:** Đặt số mol vào phương trình, dùng quy tắc nhân chéo chia ngang để tìm số mol chất cần tính $\\rightarrow$ Chuyển sang $m$ hoặc $V$.\n",
          "keyTakeaways": [
            "M_không_khí xấp xỉ 29 g/mol.",
            "dA/kk = MA / 29. Lớn hơn 1: nặng hơn kk; Nhỏ hơn 1: nhẹ hơn kk.",
            "Bắt buộc đổi hết số liệu ra mol trước khi tính toán theo phương trình."
          ],
          "quiz": [
            {
              "question": "Khí Metan (CH₄, M = 16) nặng hay nhẹ hơn không khí?",
              "options": [
                "Nặng hơn",
                "Nhẹ hơn",
                "Bằng nhau",
                "Không xác định được"
              ],
              "correctIndex": 1,
              "explanation": "d = 16 / 29 ≈ 0.55 < 1 nên khí CH₄ nhẹ hơn không khí rất nhiều."
            }
          ]
        },
        {
          "id": "lop8-bai6",
          "title": "6. Nước, Dung dịch & Nồng độ dung dịch (C%, CM)",
          "level": "Cốt tử",
          "readTime": "10 phút",
          "summary": "Chất tan, dung môi, dung dịch bão hòa và 2 công thức nồng độ phần trăm C% cùng nồng độ mol CM.",
          "content": "\n### I. Khái niệm cơ bản\n- **Chất tan:** Chất bị hòa tan trong dung môi (chất rắn, lỏng hoặc khí).\n- **Dung môi:** Chất có khả năng hòa tan chất khác (thường là nước).\n- **Dung dịch:** Hỗn hợp đồng nhất giữa chất tan và dung môi:\n  $$m_{\\text{dung dịch}} = m_{\\text{chất tan}} + m_{\\text{dung môi (nước)}}$$\n\n---\n\n### II. 2 Công thức nồng độ dung dịch quan trọng nhất\n1. **Nồng độ phần trăm ($C\\%$):**\n   $$C\\% = \\frac{m_{\\text{chất tan}}}{m_{\\text{dung dịch}}} \\times 100\\%$$\n   - $m_{\\text{chất tan}} = \\frac{m_{\\text{dd}} \\times C\\%}{100\\%}$\n   - Với dung dịch có khối lượng riêng $d$ (g/ml): $m_{\\text{dd}} = V_{\\text{dd}} \\times d$\n\n2. **Nồng độ mol ($C_M$ hoặc $M$):**\n   $$C_M = \\frac{n}{V_{\\text{dd (lít)}}} \\quad \\iff \\quad n = C_M \\times V_{\\text{dd}}$$\n\n3. **Mối liên hệ giữa $C\\%$ và $C_M$:**\n   $$C_M = \\frac{10 \\times C\\% \\times d}{M}$$\n",
          "keyTakeaways": [
            "m_dd = m_ct + m_nước = V * d",
            "C% = (m_ct / m_dd) * 100%",
            "CM = n / V(lít)",
            "CM = (10 * C% * d) / M"
          ],
          "quiz": [
            {
              "question": "Hòa tan 20g đường vào 80g nước. Nồng độ phần trăm (C%) của dung dịch thu được là:",
              "options": [
                "20%",
                "25%",
                "16.67%",
                "80%"
              ],
              "correctIndex": 0,
              "explanation": "m_dd = 20 + 80 = 100g. C% = (20 / 100) * 100% = 20%."
            }
          ]
        }
      ]
    },
    {
      "id": "stage-2",
      "grade": "Lớp 9",
      "tag": "Vô cơ & Nhập môn Hữu cơ",
      "title": "Chặng 2: 4 Hợp chất Vô cơ, Kim loại & Nhập môn Hữu cơ (Lớp 9)",
      "desc": "Nắm trọn vẹn Oxit, Axit, Bazơ, Muối, Dãy hoạt động kim loại và các hidrocacbon căn bản",
      "color": "#059669",
      "lessons": [
        {
          "id": "lop9-bai7",
          "title": "7. Oxit: Phân loại, Tính chất & Phản ứng với Kiềm",
          "level": "Cơ bản",
          "readTime": "8 phút",
          "summary": "4 loại oxit (oxit axit, bazơ, lưỡng tính, trung tính) và dạng toán CO₂, SO₂ tác dụng dung dịch kiềm.",
          "content": "\n### I. Phân loại Oxit\n1. **Oxit bazơ:** Thường là oxit của kim loại ($Na_2O, CaO, BaO, CuO, Fe_2O_3$).\n   - Oxit bazơ tan trong nước tạo dung dịch kiềm: $Na_2O, K_2O, BaO, CaO$.\n   - Tác dụng với axit tạo thành Muối + Nước:\n     $$CuO + 2HCl \\rightarrow CuCl_2 + H_2O$$\n2. **Oxit axit:** Thường là oxit của phi kim có axit tương ứng ($CO_2, SO_2, SO_3, P_2O_5$).\n   - Tác dụng với bazơ kiềm tạo Muối + Nước:\n     $$CO_2 + Ca(OH)_2 \\rightarrow CaCO_3 \\downarrow + H_2O$$\n3. **Oxit lưỡng tính:** Vừa tác dụng với axit, vừa tác dụng với bazơ kiềm ($Al_2O_3, ZnO$).\n4. **Oxit trung tính (không tạo muối):** Không tác dụng axit, bazơ ($CO, NO$).\n\n---\n\n### II. Dạng toán CO₂ / SO₂ tác dụng dung dịch NaOH\nXét tỉ lệ $T = \\frac{n_{OH^-}}{n_{CO_2}}$:\n- $T \\le 1$: Chỉ tạo muối axit $NaHCO_3$.\n- $1 < T < 2$: Tạo cả 2 muối ($NaHCO_3$ và $Na_2CO_3$).\n- $T \\ge 2$: Chỉ tạo muối trung hòa $Na_2CO_3$ (có thể dư kiềm).\n",
          "keyTakeaways": [
            "Oxit bazơ tan (Na, K, Ba, Ca) + Nước -> Dung dịch kiềm.",
            "Al2O3 và ZnO là oxit lưỡng tính.",
            "Tỉ lệ T = n_OH- / n_CO2 quyết định loại muối tạo thành."
          ],
          "quiz": [
            {
              "question": "Chất nào sau đây là oxit lưỡng tính?",
              "options": [
                "CaO",
                "CO₂",
                "Al₂O₃",
                "Na₂O"
              ],
              "correctIndex": 2,
              "explanation": "Al₂O₃ vừa phản ứng được với axit mạnh, vừa phản ứng với kiềm mạnh nên là oxit lưỡng tính."
            }
          ]
        },
        {
          "id": "lop9-bai8",
          "title": "8. Axit: HCl, H₂SO₄ loãng & H₂SO₄ đặc nóng",
          "level": "Trọng tâm",
          "readTime": "10 phút",
          "summary": "Phân biệt tính axit thường và tính oxi hóa cực mạnh của H₂SO₄ đặc nóng, nhận biết ion SO₄²⁻ bằng Ba²⁺.",
          "content": "\n### I. Tính chất hóa học chung của Axit\n1. Làm đổi màu quỳ tím sang **đỏ**.\n2. Tác dụng kim loại (đứng trước H trong dãy hoạt động) $\\rightarrow$ Muối + $H_2 \\uparrow$.\n   $$Fe + 2HCl \\rightarrow FeCl_2 + H_2 \\uparrow$$\n   *(Chú ý: Fe chỉ lên số oxi hóa +2 khi gặp axit thường HCl, H₂SO₄ loãng)*\n3. Tác dụng oxit bazơ và bazơ $\\rightarrow$ Muối + Nước.\n4. Tác dụng với muối $\\rightarrow$ Muối mới + Axit mới (điều kiện: có kết tủa hoặc bay hơi).\n\n---\n\n### II. Axit H₂SO₄ đặc, nóng - Bản chất oxi hóa siêu mạnh\n- **Tác dụng được với hầu hết kim loại** (kể cả đứng sau H như $Cu, Ag$, trừ $Au, Pt$) không giải phóng $H_2$ mà sinh ra khí $SO_2$:\n  $$Cu + 2H_2SO_4 \\text{ (đặc, nóng)} \\xrightarrow{t^\\circ} CuSO_4 + SO_2 \\uparrow + 2H_2O$$\n- Đẩy kim loại lên số oxi hóa cao nhất ($Fe \\rightarrow Fe^{3+}$).\n- **Tính háo nước mãnh liệt:** Làm than hóa đường mía ($C_{12}H_{22}O_{11} \\rightarrow 12C + 11H_2O$).\n\n---\n\n### III. Nhận biết gốc Sunfat ($SO_4^{2-}$):\nDùng thuốc thử chứa ion $Ba^{2+}$ (như dung dịch $BaCl_2, Ba(OH)_2$) tạo kết tủa trắng $BaSO_4$ không tan trong axit:\n$$Ba^{2+} + SO_4^{2-} \\rightarrow BaSO_4 \\downarrow \\text{ (trắng)}$$\n",
          "keyTakeaways": [
            "Fe + HCl / H2SO4 loãng -> Fe(II) + H2.",
            "Fe + H2SO4 đặc nóng -> Fe(III) + SO2 + H2O.",
            "Thuốc thử nhận biết ion SO4²⁻ là Ba²⁺ (kết tủa trắng BaSO4)."
          ],
          "quiz": [
            {
              "question": "Cho Fe phản ứng với dung dịch HCl dư, sản phẩm muối thu được là:",
              "options": [
                "FeCl₃",
                "FeCl₂",
                "Fe(OH)₂",
                "Fe₂O₃"
              ],
              "correctIndex": 1,
              "explanation": "HCl là axit thường có tính oxi hóa do H⁺ nên chỉ oxi hóa Fe lên hóa trị II (FeCl₂)."
            }
          ]
        },
        {
          "id": "lop9-bai9",
          "title": "9. Bazơ, Thang màu Chỉ thị & Phản ứng Trung hòa",
          "level": "Cơ bản",
          "readTime": "8 phút",
          "summary": "Phân biệt bazơ tan (kiềm) và bazơ không tan, màu sắc kết tủa và phản ứng trung hòa kinh điển.",
          "content": "\n### I. Phân loại Bazơ\n1. **Bazơ tan trong nước (Kiềm):** Gồm 4 bazơ phổ biến: $NaOH, KOH, Ba(OH)_2, Ca(OH)_2$.\n   - Làm quỳ tím chuyển **xanh**.\n   - Làm dung dịch phenolphthalein không màu chuyển sang màu **hồng**.\n2. **Bazơ không tan:** $Cu(OH)_2$ (kết tủa xanh lam), $Fe(OH)_2$ (kết tủa trắng xanh), $Fe(OH)_3$ (kết tủa nâu đỏ), $Al(OH)_3$ (kết tủa keo trắng).\n   - Bị nhiệt phân hủy thành oxit bazơ tương ứng + Nước:\n     $$Cu(OH)_2 \\xrightarrow{t^\\circ} CuO + H_2O$$\n\n---\n\n### II. Phản ứng Trung hòa\n- Là phản ứng giữa Axit và Bazơ luôn tạo Muối và Nước:\n  $$\\text{Axit} + \\text{Bazơ} \\rightarrow \\text{Muối} + H_2O$$\n  $$H^+ + OH^- \\rightarrow H_2O$$\n",
          "keyTakeaways": [
            "Bazơ kiềm tan: Na, K, Ba, Ca. Làm quỳ xanh, phenolphthalein hóa hồng.",
            "Bazơ không tan bị nhiệt phân hủy thành oxit tương ứng và nước.",
            "Phản ứng trung hòa: H⁺ + OH⁻ -> H₂O."
          ],
          "quiz": [
            {
              "question": "Kết tủa Cu(OH)₂ có màu gì đặc trưng?",
              "options": [
                "Màu trắng",
                "Màu xanh lam",
                "Màu nâu đỏ",
                "Màu vàng"
              ],
              "correctIndex": 1,
              "explanation": "Đồng(II) hiđroxit Cu(OH)₂ là kết tủa có màu xanh lam đặc trưng."
            }
          ]
        },
        {
          "id": "lop9-bai10",
          "title": "10. Muối & Điều kiện Phản ứng Trao đổi trong Dung dịch",
          "level": "Cốt tử",
          "readTime": "9 phút",
          "summary": "Điều kiện để phản ứng trao đổi xảy ra (kết tủa, bay hơi, chất điện ly yếu) và các cặp ion kỵ nhau.",
          "content": "\n### I. Tính chất hóa học của Muối\n1. Muối + Kim loại $\\rightarrow$ Muối mới + Kim loại mới (kim loại đứng trước đẩy kim loại đứng sau ra khỏi muối).\n2. Muối + Axit $\\rightarrow$ Muối mới + Axit mới.\n3. Muối + Bazơ $\\rightarrow$ Muối mới + Bazơ mới.\n4. Muối + Muối $\\rightarrow$ 2 Muối mới.\n\n---\n\n### II. Điều kiện bắt buộc để Phản ứng Trao đổi xảy ra\nPhản ứng trao đổi trong dung dịch của các chất điện ly CHỈ xảy ra khi các ion kết hợp với nhau tạo thành ít nhất một trong các sản phẩm sau:\n1. **Chất kết tủa (↓):** Ví dụ $BaSO_4 \\downarrow, AgCl \\downarrow, CaCO_3 \\downarrow...$\n2. **Chất khí / bay hơi (↑):** Ví dụ $CO_2 \\uparrow, SO_2 \\uparrow, H_2S \\uparrow...$\n3. **Chất điện ly rất yếu:** Ví dụ nước ($H_2O$).\n\n---\n\n### III. Các cặp ion không thể cùng tồn tại (kỵ nhau):\n- $Ag^+ + Cl^- \\rightarrow AgCl \\downarrow$ (trắng)\n- $Ba^{2+} + SO_4^{2-} \\rightarrow BaSO_4 \\downarrow$ (trắng)\n- $Ca^{2+} + CO_3^{2-} \\rightarrow CaCO_3 \\downarrow$ (trắng)\n- $H^+ + CO_3^{2-} \\rightarrow CO_2 \\uparrow + H_2O$\n- $H^+ + OH^- \\rightarrow H_2O$\n",
          "keyTakeaways": [
            "Điều kiện phản ứng trao đổi: Phải sinh ra kết tủa (↓), bay hơi (↑) hoặc nước (H₂O).",
            "Nếu không tạo ra một trong ba yếu tố trên, phản ứng KHÔNG xảy ra."
          ],
          "quiz": [
            {
              "question": "Cặp chất nào sau đây KHÔNG xảy ra phản ứng trao đổi khi trộn lẫn trong dung dịch?",
              "options": [
                "NaCl + AgNO₃",
                "BaCl₂ + Na₂SO₄",
                "NaCl + KNO₃",
                "HCl + Na₂CO₃"
              ],
              "correctIndex": 2,
              "explanation": "NaCl + KNO₃ tạo NaNO₃ và KCl đều là muối tan tốt, không có kết tủa hay khí bay hơi nên phản ứng không xảy ra."
            }
          ]
        },
        {
          "id": "lop9-bai11",
          "title": "11. Kim loại & Dãy Hoạt động Hóa học",
          "level": "Cốt tử",
          "readTime": "9 phút",
          "summary": "Thần chú nhớ dãy kim loại, nguyên tắc kim loại mạnh đẩy kim loại yếu và phản ứng với nước.",
          "content": "\n### I. Dãy Hoạt Động Hóa Học Của Kim Loại\n$$K > Na > Ba > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > (H) > Cu > Hg > Ag > Pt > Au$$\n\n**Thần chú học thuộc trong 30 giây:**\n> **K**hi (K) **N**ào (Na) **B**ạn (Ba) **C**ần (Ca) **M**ay (Mg) **Á**o (Al) **Z**áp (Zn) **S**ắt (Fe) **N**hìn (Ni) **S**ang (Sn) **P**hố (Pb) **H**ỏi (H) **C**ửa (Cu) **H**àng (Hg) **Á** (Ag) **P**hi (Pt) **Â**u (Au)\n\n---\n\n### II. Ý nghĩa thực tiễn khi giải toán\n1. **Mức độ hoạt động giảm dần** từ trái sang phải.\n2. **Kim loại tan trong nước ở nhiệt độ thường:** Chỉ có 4 kim loại đầu dãy ($K, Na, Ba, Ca$). Khi cho các kim loại này vào dung dịch muối, chúng sẽ phản ứng với **nước** trước sinh ra bazơ kiềm và khí $H_2$, sau đó bazơ mới phản ứng với muối (không có chuyện Na đẩy Cu ra khỏi $CuSO_4$!).\n3. **Kim loại đứng trước H:** Tác dụng với dung dịch axit loãng giải phóng khí $H_2$. Các kim loại đứng sau H ($Cu, Ag, Au$) không giải phóng $H_2$.\n4. **Quy tắc đẩy muối:** Kim loại đứng trước đẩy kim loại đứng sau ra khỏi dung dịch muối (trừ K, Na, Ba, Ca).\n   $$Fe + CuSO_4 \\rightarrow FeSO_4 + Cu \\downarrow$$\n",
          "keyTakeaways": [
            "Khi Nào Bạn Cần May Áo Záp Sắt Nhìn Sang Phố Hỏi Cửa Hàng Á Phi Âu.",
            "K, Na, Ba, Ca tác dụng với nước trước, không trực tiếp đẩy kim loại khỏi muối.",
            "Đứng trước H mới tác dụng HCl / H2SO4 loãng sinh khí H2."
          ],
          "quiz": [
            {
              "question": "Cho mẩu kim loại Đồng (Cu) vào dung dịch FeSO₄ thì hiện tượng xảy ra là:",
              "options": [
                "Đồng tan dần, có khí thoát ra",
                "Xuất hiện kết tủa Fe màu trắng",
                "Không có hiện tượng gì xảy ra",
                "Dung dịch chuyển sang màu đỏ"
              ],
              "correctIndex": 2,
              "explanation": "Cu đứng sau Fe trong dãy hoạt động hóa học nên yếu hơn Fe, không thể đẩy Fe ra khỏi FeSO₄. Do đó không xảy ra phản ứng."
            }
          ]
        },
        {
          "id": "lop9-bai12",
          "title": "12. Nhôm & Sắt: Hợp kim & Tính Lưỡng tính",
          "level": "Trọng tâm",
          "readTime": "9 phút",
          "summary": "So sánh tính chất Al và Fe, tính lưỡng tính đặc biệt của Al₂O₃ và Al(OH)₃, hiện tượng thụ động hóa.",
          "content": "\n### I. Nhôm (Al = 27, Hóa trị III)\n- Al có màng oxit $Al_2O_3$ rất mỏng, bền bảo vệ nên không tác dụng với nước và không khí ở điều kiện thường.\n- **Tính lưỡng tính của hợp chất nhôm:**\n  - $Al_2O_3$ và $Al(OH)_3$ vừa tác dụng với axit, vừa tan trong dung dịch kiềm:\n    $$Al(OH)_3 + NaOH \\rightarrow NaAlO_2 + 2H_2O \\quad (\\text{hoặc } Na[Al(OH)_4])$$\n  - *Lưu ý:* Bản thân kim loại Al KHÔNG phải là chất lưỡng tính, chỉ có oxit và hiđroxit của nó mới là chất lưỡng tính.\n\n---\n\n### II. Sắt (Fe = 56, Hóa trị II và III)\n- Tác dụng phi kim yếu hoặc axit thường ($HCl, H_2SO_4$ loãng) $\\rightarrow$ Hóa trị **II** ($FeCl_2, FeSO_4$).\n- Tác dụng chất oxi hóa mạnh ($Cl_2, HNO_3, H_2SO_4$ đặc nóng) $\\rightarrow$ Hóa trị **III** ($FeCl_3, Fe(NO_3)_3$).\n  $$2Fe + 3Cl_2 \\xrightarrow{t^\\circ} 2FeCl_3$$\n\n---\n\n### III. Hiện tượng Thụ động hóa\nCả **Al, Fe (và Cr)** đều bị **thụ động hóa** trong dung dịch $HNO_3$ đặc nguội và $H_2SO_4$ đặc nguội (không phản ứng, tạo màng oxit trơ bảo vệ).\n",
          "keyTakeaways": [
            "Al2O3 và Al(OH)3 là hợp chất lưỡng tính (tan được trong kiềm NaOH).",
            "Kim loại Al không phải chất lưỡng tính (chỉ mang tính khử).",
            "Al, Fe, Cr bị thụ động hóa trong HNO3 đặc nguội và H2SO4 đặc nguội."
          ],
          "quiz": [
            {
              "question": "Kim loại nào sau đây bị thụ động hóa trong dung dịch H₂SO₄ đặc nguội?",
              "options": [
                "Cu",
                "Fe",
                "Zn",
                "Mg"
              ],
              "correctIndex": 1,
              "explanation": "Sắt (Fe), Nhôm (Al) và Crom (Cr) bị thụ động hóa trong H₂SO₄ đặc nguội và HNO₃ đặc nguội."
            }
          ]
        },
        {
          "id": "lop9-bai13",
          "title": "13. Phi kim: Cacbon, Silic, CO và CO₂",
          "level": "Cơ bản",
          "readTime": "8 phút",
          "summary": "Dạng thù hình của C (kim cương, than chì), tính khử của oxit CO và bẫy nhiệt luyện kim loại.",
          "content": "\n### I. Đơn chất Cacbon\n- Có các dạng thù hình: Kim cương (rất cứng), Than chì (dẫn điện tốt), Cacbon vô định hình (than hoạt tính - hấp phụ màu và mùi độc).\n- Ở nhiệt độ cao, Cacbon có tính khử: Khử được oxit kim loại đứng sau Al.\n\n---\n\n### II. Khí CO - Độc tính & Tính khử nhiệt luyện\n- $CO$ là oxit trung tính, rất độc vì liên kết bền với hemoglobin trong máu làm mất khả năng vận chuyển $O_2$.\n- **Tính khử mạnh ở nhiệt độ cao:** Khử các oxit kim loại đứng **sau Al** trong dãy hoạt động ($CuO, Fe_2O_3, ZnO, PbO$):\n  $$Fe_2O_3 + 3CO \\xrightarrow{t^\\circ} 2Fe + 3CO_2 \\uparrow$$\n  $$CuO + CO \\xrightarrow{t^\\circ} Cu + CO_2 \\uparrow$$\n- *Lưu ý:* $CO$ KHÔNG khử được $Na_2O, CaO, BaO, MgO, Al_2O_3$.\n",
          "keyTakeaways": [
            "CO chỉ khử được oxit của kim loại đứng sau Al (từ Zn trở đi).",
            "Khí CO cực độc do ức chế Hemoglobin hồng cầu.",
            "CO không phản ứng với MgO, Al2O3."
          ],
          "quiz": [
            {
              "question": "Khí CO khử được oxit kim loại nào sau đây ở nhiệt độ cao?",
              "options": [
                "Al₂O₃",
                "MgO",
                "Fe₂O₃",
                "CaO"
              ],
              "correctIndex": 2,
              "explanation": "CO chỉ khử được các oxit kim loại đứng sau Al (từ Zn trở đi), do đó Fe₂O₃ bị khử về Fe."
            }
          ]
        },
        {
          "id": "lop9-bai14",
          "title": "14. Hidrocacbon Nhập môn: Metan, Etilen, Axetilen",
          "level": "Trọng tâm",
          "readTime": "10 phút",
          "summary": "So sánh cấu tạo liên kết đơn, đôi, ba; phản ứng thế đặc trưng của ankan và phản ứng cộng làm mất màu Brom của anken/ankin.",
          "content": "\n### I. Metan ($CH_4$ - Đại diện liên kết đơn)\n- Phân tử chỉ chứa liên kết đơn $C-H$ rất bền vững.\n- **Phản ứng đặc trưng: Phản ứng thế halogen (với ánh sáng khuếch tán):**\n  $$CH_4 + Cl_2 \\xrightarrow{as} CH_3Cl \\text{ (metyl clorua)} + HCl$$\n- Khí metan KHÔNG làm mất màu dung dịch Brom.\n\n---\n\n### II. Etilen ($C_2H_4$ hay $CH_2=CH_2$)\n- Có chứa **1 liên kết đôi $C=C$** (gồm 1 liên kết $\\sigma$ bền và 1 liên kết $\\pi$ kém bền dễ bị bẻ gãy).\n- **Phản ứng đặc trưng: Phản ứng cộng:**\n  - Làm **mất màu da cam của dung dịch Brom**:\n    $$CH_2=CH_2 + Br_2 \\rightarrow CH_2Br-CH_2Br$$\n  - Phản ứng trùng hợp tạo nhựa PE:\n    $$n CH_2=CH_2 \\xrightarrow{t^\\circ, p, xt} -(-CH_2-CH_2-)-_n$$\n\n---\n\n### III. Axetilen ($C_2H_2$ hay $CH \\equiv CH$)\n- Có chứa **1 liên kết ba $C \\equiv C$** (gồm 1 liên kết $\\sigma$ và 2 liên kết $\\pi$ kém bền).\n- Cũng làm mất màu dung dịch Brom (tỉ lệ mol tối đa 1 : 2).\n",
          "keyTakeaways": [
            "CH4 chỉ có liên kết đơn -> Phản ứng thế, không làm mất màu nước Brom.",
            "C2H4 có liên kết đôi C=C -> Làm mất màu dung dịch Brom, trùng hợp tạo PE.",
            "C2H2 có liên kết ba C≡C -> Làm mất màu dung dịch Brom theo tỉ lệ 1:2."
          ],
          "quiz": [
            {
              "question": "Để phân biệt 2 bình khí không màu Metan (CH₄) và Etilen (C₂H₄), thuốc thử tốt nhất là:",
              "options": [
                "Dung dịch HCl",
                "Dung dịch Nước Brom",
                "Dung dịch NaOH",
                "Quỳ tím ẩm"
              ],
              "correctIndex": 1,
              "explanation": "Etilen có liên kết đôi C=C làm mất màu dung dịch nước Brom, còn Metan thì không."
            }
          ]
        },
        {
          "id": "lop9-bai15",
          "title": "15. Rượu Etylic (C₂H₅OH) & Axit Axetic (CH₃COOH)",
          "level": "Cơ bản",
          "readTime": "9 phút",
          "summary": "Nhóm định chức -OH và -COOH, phản ứng este hóa tạo etyl axetat có mùi thơm hoa quả.",
          "content": "\n### I. Rượu Etylic (Ancol etylic: $C_2H_5OH$)\n- Chứa nhóm hiđroxyl ($-OH$).\n- Tác dụng với kim loại kiềm giải phóng $H_2$:\n  $$2C_2H_5OH + 2Na \\rightarrow 2C_2H_5ONa + H_2 \\uparrow$$\n- *Độ rượu:* Số ml rượu etylic nguyên chất có trong 100 ml dung dịch rượu hỗn hợp với nước.\n  $$Đ_r = \\frac{V_{\\text{rượu nguyên chất}}}{V_{\\text{dung dịch rượu}}} \\times 100$$\n\n---\n\n### II. Axit Axetic ($CH_3COOH$)\n- Chứa nhóm cacboxyl ($-COOH$).\n- Mang đầy đủ tính chất của một axit hữu cơ yếu: làm đổi màu quỳ sang đỏ, tác dụng kim loại trước H, tác dụng oxit bazơ, bazơ và muối cacbonat ($+ Na_2CO_3 \\rightarrow CO_2 \\uparrow$).\n\n---\n\n### III. Phản ứng Este hóa (Kinh điển Lớp 9 & 12)\nPhản ứng giữa axit axetic và rượu etylic tạo este **Etyl axetat** có mùi thơm đặc trưng của chuối/táo:\n$$CH_3COOH + C_2H_5OH \\xrightleftharpoons{H_2SO_4 \\text{ đặc}, t^\\circ} CH_3COOC_2H_5 + H_2O$$\n- Là phản ứng thuận nghịch, xúc tác $H_2SO_4$ đặc vừa hút nước, vừa tăng tốc độ phản ứng.\n",
          "keyTakeaways": [
            "Rượu etylic có nhóm -OH -> Tác dụng được với Na, K giải phóng H2.",
            "Axit axetic có nhóm -COOH -> Làm sủi bọt khí CO2 khi tác dụng Na2CO3/CaCO3.",
            "Phản ứng este hóa: Axit + Ancol ⇌ Este + Nước (thuận nghịch, H2SO4 đặc nóng)."
          ],
          "quiz": [
            {
              "question": "Phản ứng giữa axit axetic (CH₃COOH) và rượu etylic (C₂H₅OH) sinh ra este nào?",
              "options": [
                "Metyl axetat",
                "Etyl axetat",
                "Propyl axetat",
                "Etyl fomat"
              ],
              "correctIndex": 1,
              "explanation": "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (etyl axetat) + H₂O."
            }
          ]
        }
      ]
    },
    {
      "id": "stage-3",
      "grade": "Lớp 10",
      "tag": "Cấu trúc & Năng lượng",
      "title": "Chặng 3: Cấu tạo Nguyên tử, Bảng Tuần hoàn & Oxi hóa - Khử (Lớp 10)",
      "desc": "Cấu hình electron, xu hướng tuần hoàn, liên kết hóa học, nhiệt phản ứng và nhóm Halogen",
      "color": "#d97706",
      "lessons": [
        {
          "id": "lop10-bai16",
          "title": "16. Thành phần Nguyên tử, Đồng vị & Nguyên tử khối Trung bình",
          "level": "Cốt lõi 10",
          "readTime": "8 phút",
          "summary": "Ký hiệu nguyên tử ^A_Z X, đồng vị phóng xạ, công thức tính nguyên tử khối trung bình theo phần trăm.",
          "content": "\n### I. Ký hiệu Nguyên tử\n$$\\Large ^{A}_{Z}X$$\n- **$Z$ (Số hiệu nguyên tử):** = Số proton ($p$) = Số electron ($e$) = Điện tích hạt nhân ($+Z$).\n- **$A$ (Số khối):** Tổng số hạt trong hạt nhân:\n  $$A = Z + N$$\n  *(với $N$ là số nơtron)*\n\n---\n\n### II. Đồng vị là gì?\n- Các **đồng vị** của cùng một nguyên tố là những nguyên tử có **cùng số proton ($Z$)**, nhưng **khác số nơtron ($N$)**, do đó có số khối $A$ khác nhau.\n- *Ví dụ:* Nguyên tố Hiđro có 3 đồng vị: $^1_1H$ (Proti), $^2_1H$ (Đơteri, D), $^3_1H$ (Triti, T).\n\n---\n\n### III. Công thức tính Nguyên tử khối Trung bình ($\\overline{A}$)\nNếu một nguyên tố có 2 đồng vị: đồng vị $A_1$ chiếm $x\\%$, đồng vị $A_2$ chiếm $y\\%$ (với $x + y = 100$):\n$$\\overline{A} = \\frac{A_1 \\times x + A_2 \\times y}{100}$$\n- *Ví dụ với Clo:* $^{35}Cl$ chiếm 75% và $^{37}Cl$ chiếm 25%:\n  $$\\overline{A}_{Cl} = \\frac{35 \\times 75 + 37 \\times 25}{100} = 35{,}5$$\n",
          "keyTakeaways": [
            "Số khối A = Z + N (proton + nơtron).",
            "Đồng vị: Cùng Z (cùng số p), khác N (khác số khối A).",
            "Nguyên tử khối trung bình tính theo trung bình trọng số phần trăm số nguyên tử."
          ],
          "quiz": [
            {
              "question": "Nguyên tử nguyên tố X có ký hiệu ²³₁₁Na. Số nơtron trong hạt nhân của X là:",
              "options": [
                "11",
                "12",
                "23",
                "34"
              ],
              "correctIndex": 1,
              "explanation": "Z = 11, A = 23. Số nơtron N = A - Z = 23 - 11 = 12 hạt."
            }
          ]
        },
        {
          "id": "lop10-bai17",
          "title": "17. Cấu hình Electron & Quy tắc Klechkowski",
          "level": "Cốt tử 10",
          "readTime": "10 phút",
          "summary": "Thứ tự mức năng lượng 1s 2s 2p 3s 3p 4s 3d..., phân lớp s, p, d, f và xác định tính kim loại/phi kim.",
          "content": "\n### I. Phân lớp electron & Số e tối đa\n- Các phân lớp: $s, p, d, f$.\n- Số electron tối đa trong từng phân lớp:\n  - Phân lớp $s$: tối đa **2e** ($s^2$).\n  - Phân lớp $p$: tối đa **6e** ($p^6$).\n  - Phân lớp $d$: tối đa **10e** ($d^{10}$).\n  - Phân lớp $f$: tối đa **14e** ($f^{14}$).\n\n---\n\n### II. Thứ tự mức năng lượng (Klechkowski)\nThứ tự xếp theo năng lượng tăng dần:\n$$1s \\; 2s \\; 2p \\; 3s \\; 3p \\; \\mathbf{4s} \\; \\mathbf{3d} \\; 4p \\; 5s \\; 4d \\; 5p \\; 6s...$$\n> **Mẹo nhớ:** *Sáng Sớm Pha Sữa Pha Sữa Đi Pha Sữa...*  \n*(Chú ý: Phân lớp 4s có mức năng lượng thấp hơn 3d nên electron điền vào 4s trước rồi mới điền vào 3d)*\n\n---\n\n### III. Cách viết Cấu hình electron\n- **Bước 1:** Điền e theo thứ tự năng lượng Klechkowski.\n- **Bước 2:** Sắp xếp lại theo từng lớp từ trong ra ngoài ($1 \\rightarrow 2 \\rightarrow 3 \\rightarrow 4$).\n  - *Ví dụ với Fe ($Z = 26$):*\n    - Mức năng lượng: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$\n    - Cấu hình e viết chuẩn: $1s^2 2s^2 2p^6 3s^2 3p^6 3d^6 4s^2$ (hoặc $[Ar] 3d^6 4s^2$)\n\n---\n\n### IV. Dự đoán tính chất nguyên tố qua số e lớp ngoài cùng\n- Có 1, 2, 3 electron lớp ngoài cùng $\\rightarrow$ **Kim loại** (trừ H, He, B).\n- Có 5, 6, 7 electron lớp ngoài cùng $\\rightarrow$ **Phi kim**.\n- Có 8 electron lớp ngoài cùng $\\rightarrow$ **Khí hiếm** (bền vững, He có 2e).\n- Có 4 electron lớp ngoài cùng $\\rightarrow$ Có thể là kim loại hoặc phi kim (C, Si là phi kim; Sn, Pb là kim loại).\n",
          "keyTakeaways": [
            "Số e tối đa: s² p⁶ d¹⁰ f¹⁴.",
            "Điền e vào 4s trước 3d, nhưng khi viết cấu hình phải xếp 3d trước 4s.",
            "1, 2, 3 e ngoài cùng: Kim loại; 5, 6, 7 e ngoài cùng: Phi kim; 8 e ngoài cùng: Khí hiếm."
          ],
          "quiz": [
            {
              "question": "Nguyên tử có cấu hình electron lớp ngoài cùng là 3s² 3p⁵ thuộc loại nguyên tố nào?",
              "options": [
                "Kim loại",
                "Phi kim",
                "Khí hiếm",
                "Kim loại chuyển tiếp"
              ],
              "correctIndex": 1,
              "explanation": "Lớp ngoài cùng (lớp 3) có 2 + 5 = 7 electron. Nguyên tố có 7e lớp ngoài cùng là phi kim (Clo)."
            }
          ]
        },
        {
          "id": "lop10-bai18",
          "title": "18. Bảng Tuần hoàn & Quy luật Biến đổi Tuần hoàn",
          "level": "Trọng tâm 10",
          "readTime": "9 phút",
          "summary": "Ô, Chu kỳ, Nhóm A/B và quy luật biến đổi bán kính nguyên tử, độ âm điện, tính kim loại/phi kim.",
          "content": "\n### I. Cấu trúc Bảng tuần hoàn\n1. **Ô nguyên tố:** = Số hiệu nguyên tử $Z$ = Số proton = Số electron.\n2. **Chu kỳ (hàng ngang):** Có 7 chu kỳ.\n   $$\\text{Số thứ tự chu kỳ} = \\text{Số lớp electron}$$\n3. **Nhóm (cột dọc):**\n   - **Nhóm A:** Nguyên tố s và p.\n     $$\\text{Số thứ tự nhóm A} = \\text{Số electron lớp ngoài cùng}$$\n   - **Nhóm B:** Nguyên tố d và f (kim loại chuyển tiếp).\n\n---\n\n### II. Quy luật Biến đổi Tuần hoàn Cốt tử\nTrong một **Chu kỳ** (đi từ Trái $\\rightarrow$ Phải):\n- Bán kính nguyên tử: **GIẢM DẦN** (do điện tích hạt nhân tăng kéo e lại gần).\n- Độ âm điện: **TĂNG DẦN**.\n- Tính phi kim: **TĂNG DẦN**; Tính kim loại: **GIẢM DẦN**.\n\nTrong một **Nhóm A** (đi từ Trên $\\rightarrow$ Dưới):\n- Bán kính nguyên tử: **TĂNG DẦN** (do số lớp electron tăng lên).\n- Độ âm điện: **GIẢM DẦN**.\n- Tính kim loại: **TĂNG DẦN**; Tính phi kim: **GIẢM DẦN**.\n",
          "keyTakeaways": [
            "Số lớp e = Số chu kỳ; Số e ngoài cùng = Số nhóm A.",
            "Từ trái qua phải trong 1 chu kỳ: Bán kính giảm, độ âm điện tăng, tính phi kim tăng.",
            "Từ trên xuống dưới trong 1 nhóm A: Bán kính tăng, độ âm điện giảm, tính kim loại tăng."
          ],
          "quiz": [
            {
              "question": "Trong cùng một chu kỳ, đi từ trái sang phải theo chiều tăng của điện tích hạt nhân, bán kính nguyên tử:",
              "options": [
                "Tăng dần",
                "Giảm dần",
                "Không đổi",
                "Biến đổi không có quy luật"
              ],
              "correctIndex": 1,
              "explanation": "Trong một chu kỳ từ trái sang phải, số lớp e không đổi nhưng điện tích hạt nhân tăng hút mây electron mạnh hơn nên bán kính giảm dần."
            }
          ]
        },
        {
          "id": "lop10-bai19",
          "title": "19. Liên kết Hóa học: Ion, Cộng hóa trị & Liên kết Hiđro",
          "level": "Cơ bản 10",
          "readTime": "9 phút",
          "summary": "Hiệu độ âm điện Δχ, bản chất lực hút tĩnh điện của liên kết ion và cặp electron dùng chung.",
          "content": "\n### I. Dựa vào Hiệu độ âm điện ($\\Delta \\chi$)\nXét hợp chất giữa 2 nguyên tố $A$ và $B$: $\\Delta \\chi = |\\chi_A - \\chi_B|$:\n- $0 \\le \\Delta \\chi < 0{,}4$: **Liên kết cộng hóa trị KHÔNG phân cực** (Ví dụ: $H_2, Cl_2, CH_4$).\n- $0{,}4 \\le \\Delta \\chi < 1{,}7$: **Liên kết cộng hóa trị CÓ phân cực** (Ví dụ: $HCl, H_2O, NH_3$).\n- $\\Delta \\chi \\ge 1{,}7$: **Liên kết ION** (Ví dụ: $NaCl, CaCl_2, K_2O$).\n\n---\n\n### II. Bản chất các loại liên kết\n1. **Liên kết Ion:**\n   - Hình thành do **lực hút tĩnh điện** giữa các ion mang điện tích trái dấu (thường giữa kim loại điển hình nhóm IA, IIA và phi kim điển hình nhóm VIIA, VIA).\n   - Hợp chất ion có nhiệt độ nóng chảy và sôi rất cao, dẫn điện khi nóng chảy hoặc tan trong nước.\n2. **Liên kết Cộng hóa trị:**\n   - Hình thành do **các cặp electron dùng chung** giữa các nguyên tử phi kim.\n3. **Liên kết Hiđro (Hydrogen bond):**\n   - Lực hút tĩnh điện yếu giữa nguyên tử $H$ linh động liên kết với nguyên tử có độ âm điện lớn ($F, O, N$) với cặp electron tự do của $F, O, N$ khác.\n   - Khiến $H_2O, C_2H_5OH$ có **nhiệt độ sôi cao bất thường**.\n",
          "keyTakeaways": [
            "Liên kết Ion: Kim loại điển hình + Phi kim điển hình (lực hút tĩnh điện cation và anion).",
            "Liên kết CHT: Cặp e dùng chung giữa các phi kim.",
            "Liên kết Hiđro làm tăng nhiệt độ sôi của nước và ancol."
          ],
          "quiz": [
            {
              "question": "Hợp chất nào sau đây có chứa liên kết ion?",
              "options": [
                "HCl",
                "H₂O",
                "NaCl",
                "CH₄"
              ],
              "correctIndex": 2,
              "explanation": "NaCl được tạo bởi kim loại mạnh Na (IA) và phi kim mạnh Cl (VIIA), hiệu độ âm điện lớn nên có liên kết ion."
            }
          ]
        },
        {
          "id": "lop10-bai20",
          "title": "20. Phản ứng Oxi hóa - Khử & Phương pháp Thăng bằng Electron",
          "level": "Cực kỳ trọng tâm 10-12",
          "readTime": "12 phút",
          "summary": "Quy tắc xác định số oxi hóa, khẩu quyết Khử cho - O nhận và 4 bước thăng bằng e chuẩn xác.",
          "content": "\n### I. 4 Quy tắc xác định Số oxi hóa\n1. Số oxi hóa của đơn chất luôn bằng **0** ($Fe^0, Cu^0, H_2^0, O_2^0$).\n2. Trong hợp chất:\n   - $H$ luôn có số oxi hóa **+1** (trừ hiđrua kim loại $NaH$).\n   - $O$ luôn có số oxi hóa **-2** (trừ peoxit $H_2O_2$ là -1, $OF_2$ là +2).\n   - Kim loại kiềm luôn là **+1**, kiềm thổ luôn là **+2**, nhôm luôn là **+3**.\n3. Tổng số oxi hóa của các nguyên tử trong phân tử trung hòa điện bằng **0**.\n4. Trong ion đa nguyên tử, tổng số oxi hóa bằng đúng điện tích của ion đó (Ví dụ $SO_4^{2-}$ có $S^{+6} + 4 \\times O^{-2} = -2$).\n\n---\n\n### II. Khẩu quyết sống còn: \"Khử Cho - O Nhận\"\n- **Chất khử (chất bị oxi hóa):** Cho e $\\rightarrow$ Số oxi hóa **TĂNG**.\n- **Chất oxi hóa (chất bị khử):** Nhận e $\\rightarrow$ Số oxi hóa **GIẢM**.\n\n---\n\n### III. 4 Bước thăng bằng Electron\n1. **Bước 1:** Xác định các nguyên tố có số oxi hóa thay đổi trước và sau phản ứng.\n2. **Bước 2:** Viết các quá trình oxi hóa (nhường e) và quá trình khử (nhận e).\n3. **Bước 3:** Tìm bội chung nhỏ nhất để:\n   $$\\sum e_{\\text{nhường}} = \\sum e_{\\text{nhận}}$$\n4. **Bước 4:** Điền hệ số vào phản ứng và kiểm tra lại theo thứ tự: **Kim loại $\\rightarrow$ Phi kim $\\rightarrow$ Hiđro $\\rightarrow$ Oxi**.\n",
          "keyTakeaways": [
            "Đơn chất = 0; H = +1, O = -2; Kim loại kiềm = +1, kiềm thổ = +2, Al = +3.",
            "Khử cho - O nhận: Tăng khử, giảm oxi hóa.",
            "Tổng mol e cho luôn bằng tổng mol e nhận."
          ],
          "quiz": [
            {
              "question": "Số oxi hóa của nguyên tố Mangan (Mn) trong hợp chất KMnO₄ là:",
              "options": [
                "+2",
                "+4",
                "+6",
                "+7"
              ],
              "correctIndex": 3,
              "explanation": "K có số oxh +1, O có -2. Ta có: (+1) + x + 4*(-2) = 0 => x = +7."
            }
          ]
        },
        {
          "id": "lop10-bai21",
          "title": "21. Năng lượng Hóa học & Tốc độ Phản ứng",
          "level": "SGK Mới Trọng tâm",
          "readTime": "10 phút",
          "summary": "Biến thiên enthalpy chuẩn ΔrH°₂₉₈, phản ứng tỏa nhiệt (âm), thu nhiệt (dương) và 5 yếu tố ảnh hưởng tốc độ phản ứng.",
          "content": "\n### I. Năng lượng Hóa học & Enthalpy ($\\Delta_r H^\\circ_{298}$)\n- **Phản ứng tỏa nhiệt:** Giải phóng năng lượng dưới dạng nhiệt ra môi trường.\n  $$\\mathbf{\\Delta_r H^\\circ_{298} < 0} \\quad (\\text{giá trị âm})$$\n  *(Ví dụ: Phản ứng cháy than, phản ứng trung hòa axit - bazơ).*\n- **Phản ứng thu nhiệt:** Hấp thụ nhiệt từ môi trường.\n  $$\\mathbf{\\Delta_r H^\\circ_{298} > 0} \\quad (\\text{giá trị dương})$$\n  *(Ví dụ: Phản ứng nung vôi $CaCO_3 \\xrightarrow{t^\\circ} CaO + CO_2$).*\n\n---\n\n### II. 5 Yếu tố ảnh hưởng đến Tốc độ Phản ứng\nTốc độ phản ứng tăng khi:\n1. **Nồng độ chất phản ứng tăng** (tăng số va chạm hiệu quả).\n2. **Nhiệt độ tăng** (tăng động năng phân tử).\n3. **Áp suất tăng** (áp dụng cho các phản ứng có chất khí).\n4. **Diện tích tiếp xúc tăng** (nghiền nhỏ, đập vụn chất rắn).\n5. **Chất xúc tác:** Làm giảm năng lượng hoạt hóa, tăng tốc độ mà không bị tiêu hao sau phản ứng.\n",
          "keyTakeaways": [
            "ΔrH° < 0: Phản ứng TỎA nhiệt; ΔrH° > 0: Phản ứng THU nhiệt.",
            "5 yếu tố tăng tốc độ phản ứng: Nồng độ, Nhiệt độ, Áp suất, Diện tích tiếp xúc, Xúc tác."
          ],
          "quiz": [
            {
              "question": "Một phản ứng hóa học có biến thiên enthalpy chuẩn ΔrH°₂₉₈ = -393.5 kJ. Phản ứng này là:",
              "options": [
                "Phản ứng thu nhiệt",
                "Phản ứng tỏa nhiệt",
                "Phản ứng không đổi nhiệt",
                "Phản ứng phân hủy"
              ],
              "correctIndex": 1,
              "explanation": "ΔrH° < 0 (giá trị âm) là dấu hiệu đặc trưng của phản ứng tỏa nhiệt ra môi trường."
            }
          ]
        },
        {
          "id": "lop10-bai22",
          "title": "22. Nhóm Halogen (F, Cl, Br, I) & Axit Clohiđric",
          "level": "Trọng tâm 10",
          "readTime": "9 phút",
          "summary": "Xu hướng tính oxi hóa F₂ > Cl₂ > Br₂ > I₂, điều chế Clo trong phòng thí nghiệm và nhận biết ion halogenua.",
          "content": "\n### I. Tính chất chung của Halogen (Nhóm VIIA)\n- Có 7e lớp ngoài cùng ($ns^2 np^5$), rất háo hức nhận thêm 1e để đạt cấu hình khí hiếm $\\rightarrow$ **Tính oxi hóa rất mạnh**.\n- Quy luật giảm dần tính oxi hóa:\n  $$F_2 > Cl_2 > Br_2 > I_2$$\n  - Halogen đứng trước đẩy được halogen đứng sau ra khỏi dung dịch muối:\n    $$Cl_2 + 2NaBr \\rightarrow 2NaCl + Br_2$$\n\n---\n\n### II. Nhận biết các ion Halogenua bằng dung dịch $AgNO_3$\n- $F^-$: Không tạo kết tủa ($AgF$ tan tốt).\n- $Cl^-$: Tạo kết tủa **trắng** $AgCl \\downarrow$.\n- $Br^-$: Tạo kết tủa **vàng nhạt** $AgBr \\downarrow$.\n- $I^-$: Tạo kết tủa **vàng đậm** $AgI \\downarrow$.\n",
          "keyTakeaways": [
            "Tính oxi hóa: F2 > Cl2 > Br2 > I2.",
            "Nhận biết halogenua bằng AgNO3: AgCl (trắng), AgBr (vàng nhạt), AgI (vàng đậm)."
          ],
          "quiz": [
            {
              "question": "Cho vài giọt dung dịch AgNO₃ vào dung dịch NaCl, hiện tượng quan sát được là:",
              "options": [
                "Không có hiện tượng",
                "Xuất hiện kết tủa trắng",
                "Xuất hiện kết tủa vàng đậm",
                "Có sủi bọt khí"
              ],
              "correctIndex": 1,
              "explanation": "Ag⁺ + Cl⁻ -> AgCl ↓ (kết tủa màu trắng)."
            }
          ]
        }
      ]
    },
    {
      "id": "stage-4",
      "grade": "Lớp 11",
      "tag": "Dung dịch & Hữu cơ",
      "title": "Chặng 4: Cân bằng, Sự Điện ly & Toàn bộ Hidrocacbon (Lớp 11)",
      "desc": "Nguyên lý Le Chatelier, pH dung dịch, Nitơ, Lưu huỳnh, Ankan, Anken, Ankin, Aren và Ancol",
      "color": "#7c3aed",
      "lessons": [
        {
          "id": "lop11-bai23",
          "title": "23. Cân bằng Hóa học & Nguyên lý Le Chatelier",
          "level": "Cốt tử 11",
          "readTime": "9 phút",
          "summary": "Hằng số cân bằng Kc và nguyên lý chuyển dịch cân bằng: Chống lại yếu tố bên ngoài tác động.",
          "content": "\n### I. Cân bằng Hóa học & Hằng số $K_c$\n- Phản ứng thuận nghịch: $aA + bB \\rightleftharpoons cC + dD$.\n- Cân bằng hóa học là **cân bằng động** (tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch: $v_t = v_n$).\n- Hằng số cân bằng nồng độ:\n  $$K_c = \\frac{[C]^c \\cdot [D]^d}{[A]^a \\cdot [B]^b}$$\n  *(Chỉ phụ thuộc vào bản chất phản ứng và nhiệt độ, không tính nồng độ chất rắn)*\n\n---\n\n### II. Nguyên lý Chuyển dịch Cân bằng Le Chatelier\n> *\"Một phản ứng thuận nghịch đang ở trạng thái cân bằng, khi chịu một tác động từ bên ngoài (nồng độ, nhiệt độ, áp suất) thì cân bằng sẽ chuyển dịch theo chiều **CHỐNG LẠI** tác động đó.\"*\n\n1. **Nhiệt độ:**\n   - Tăng nhiệt độ $\\rightarrow$ Chuyển dịch theo chiều **THU NHIỆT** (chiều có $\\Delta H > 0$).\n   - Giảm nhiệt độ $\\rightarrow$ Chuyển dịch theo chiều **TỎA NHIỆT** (chiều có $\\Delta H < 0$).\n2. **Áp suất:**\n   - Tăng áp suất $\\rightarrow$ Chuyển dịch theo chiều **GIẢM số mol khí**.\n   - Giảm áp suất $\\rightarrow$ Chuyển dịch theo chiều **TĂNG số mol khí**.\n3. **Chất xúc tác:** KHÔNG làm chuyển dịch cân bằng, chỉ giúp cân bằng đạt được nhanh hơn.\n",
          "keyTakeaways": [
            "Nguyên lý Le Chatelier: Cân bằng chuyển dịch chống lại tác động bên ngoài.",
            "Tăng nhiệt độ -> Chuyển dịch chiều thu nhiệt (ΔH > 0).",
            "Tăng áp suất -> Chuyển dịch chiều giảm số mol khí.",
            "Chất xúc tác KHÔNG làm chuyển dịch cân bằng."
          ],
          "quiz": [
            {
              "question": "Cho cân bằng: N₂(k) + 3H₂(k) ⇌ 2NH₃(k), ΔH < 0. Để cân bằng chuyển dịch theo chiều thuận (tạo ra nhiều NH₃ hơn), cần:",
              "options": [
                "Tăng nhiệt độ",
                "Giảm áp suất",
                "Tăng áp suất",
                "Thêm chất xúc tác"
              ],
              "correctIndex": 2,
              "explanation": "Phía chất tham gia có 1 + 3 = 4 mol khí, sản phẩm có 2 mol khí. Tăng áp suất sẽ làm cân bằng chuyển dịch theo chiều giảm số mol khí (chiều thuận sang 2 mol)."
            }
          ]
        },
        {
          "id": "lop11-bai24",
          "title": "24. Sự Điện ly, Axit - Bazơ & Thang đo pH",
          "level": "Cốt tử 11",
          "readTime": "10 phút",
          "summary": "Thuyết Bronsted - Lowry (cho/nhận H⁺), công thức tính pH = -log[H⁺], tính nồng độ ion sau pha trộn.",
          "content": "\n### I. Thuyết Axit - Bazơ của Brønsted - Lowry\n- **Axit:** Là chất có khả năng **cho proton ($H^+$)**.\n- **Bazơ:** Là chất có khả năng **nhận proton ($H^+$)**.\n- **Chất lưỡng tính:** Vừa có khả năng cho, vừa có khả năng nhận $H^+$ (như $H_2O, HCO_3^-, HSO_3^-, Al(OH)_3$).\n\n---\n\n### II. Thang đo pH & Môi trường dung dịch\n$$\\text{pH} = -\\log[H^+] \\quad \\iff \\quad [H^+] = 10^{-\\text{pH}}$$\n- Tích số ion của nước ở 25°C: $[H^+] \\times [OH^-] = 10^{-14} \\implies \\text{pH} + \\text{pOH} = 14$.\n- **Môi trường:**\n  - $\\text{pH} < 7$: Môi trường **Axit** ($[H^+] > 10^{-7}$).\n  - $\\text{pH} = 7$: Môi trường **Trung tính** ($[H^+] = 10^{-7}$).\n  - $\\text{pH} > 7$: Môi trường **Bazơ (Kiềm)** ($[H^+] < 10^{-7}, [OH^-] > 10^{-7}$).\n",
          "keyTakeaways": [
            "Axit cho H+, Bazơ nhận H+.",
            "pH = -log[H+]; pH + pOH = 14.",
            "pH < 7: Axit; pH = 7: Trung tính; pH > 7: Bazơ."
          ],
          "quiz": [
            {
              "question": "Dung dịch NaOH 0.01 M có pH bằng bao nhiêu?",
              "options": [
                "2",
                "7",
                "12",
                "14"
              ],
              "correctIndex": 2,
              "explanation": "[OH⁻] = 0.01 = 10⁻² M => pOH = 2 => pH = 14 - pOH = 14 - 2 = 12."
            }
          ]
        },
        {
          "id": "lop11-bai25",
          "title": "25. Đơn chất & Hợp chất của Nitơ (N₂, NH₃, HNO₃)",
          "level": "Trọng tâm 11",
          "readTime": "11 phút",
          "summary": "Liên kết ba siêu bền của N₂, tính bazơ và tính khử của NH₃, tính oxi hóa cực mạnh của HNO₃ và các sản phẩm khử NO, NO₂, N₂O, N₂.",
          "content": "\n### I. Khí Nitơ ($N_2$)\n- Phân tử có liên kết ba $N \\equiv N$ năng lượng liên kết rất lớn nên ở nhiệt độ thường trơ về mặt hóa học.\n\n---\n\n### II. Amoniac ($NH_3$) & Muối Amoni ($NH_4^+$)\n- $NH_3$ có tính **bazơ yếu** (làm quỳ tím ẩm hóa xanh) và tính **khử** (do N có số oxh -3 thấp nhất).\n- Tất cả các muối amoni ($NH_4^+$) đều tan trong nước và tác dụng với kiềm giải phóng khí mùi khai $NH_3$:\n  $$NH_4^+ + OH^- \\rightarrow NH_3 \\uparrow + H_2O$$\n\n---\n\n### III. Axit Nitric ($HNO_3$) - Vũ khí số oxi hóa +5\n- Oxi hóa được hầu hết kim loại (trừ Au, Pt) lên số oxi hóa cao nhất:\n  - Kim loại mạnh (Mg, Al, Zn) tác dụng $HNO_3$ loãng có thể khử N xuống $NH_4NO_3$ (không có khí thoát ra!).\n  - Kim loại tác dụng $HNO_3$ đặc thường sinh khí màu nâu đỏ $NO_2$.\n  - Kim loại tác dụng $HNO_3$ loãng thường sinh khí không màu hóa nâu ngoài không khí $NO$.\n",
          "keyTakeaways": [
            "Muối amoni + Kiềm -> Sinh khí NH3 mùi khai.",
            "HNO3 oxi hóa hầu hết kim loại lên hóa trị cao nhất.",
            "Mg, Al, Zn + HNO3 loãng có thể sinh ra muối NH4NO3."
          ],
          "quiz": [
            {
              "question": "Khí nào sau đây không màu nhưng bị hóa nâu ngoài không khí?",
              "options": [
                "NO₂",
                "NO",
                "N₂O",
                "NH₃"
              ],
              "correctIndex": 1,
              "explanation": "Khí NO không màu, khi gặp oxi trong không khí dễ dàng phản ứng tạo NO₂ có màu nâu đỏ."
            }
          ]
        },
        {
          "id": "lop11-bai26",
          "title": "26. Lưu huỳnh & Axit Sunfuric Đặc",
          "level": "Trọng tâm 11",
          "readTime": "9 phút",
          "summary": "Số oxi hóa của S (-2, 0, +4, +6), tính khử của H₂S, SO₂ và phản ứng của H₂SO₄ đặc.",
          "content": "\n### I. Hợp chất của Lưu huỳnh\n- **$H_2S$ (Số oxh -2):** Khí mùi trứng thối, độc, chỉ có tính **khử mạnh**. Tạo kết tủa đen với dung dịch $Cu^{2+}, Pb^{2+}$ ($CuS, PbS \\downarrow$ không tan trong axit).\n- **$SO_2$ (Số oxh +4):** Vừa có tính khử (làm mất màu nước Brom), vừa có tính oxi hóa (tác dụng với $H_2S$ tạo lưu huỳnh vàng).\n\n---\n\n### II. Axit Sunfuric Đặc ($H_2SO_4$ đặc)\n- Tính háo nước cực mạnh và tính oxi hóa cao khi đun nóng.\n- Kim loại + $H_2SO_4$ đặc nóng $\\rightarrow$ Muối sunfat hóa trị cao nhất + $SO_2 \\uparrow + H_2O$.\n",
          "keyTakeaways": [
            "H2S có mùi trứng thối, tạo kết tủa CuS, PbS đen không tan trong axit.",
            "SO2 làm mất màu nước Brom.",
            "H2SO4 đặc háo nước và oxi hóa kim loại lên số oxh tối đa."
          ],
          "quiz": [
            {
              "question": "Chất khí nào sau đây làm mất màu dung dịch nước Brom?",
              "options": [
                "CO₂",
                "SO₂",
                "N₂",
                "O₂"
              ],
              "correctIndex": 1,
              "explanation": "SO₂ có số oxi hóa +4 có tính khử, khử Brom về HBr làm mất màu nước Brom: SO₂ + Br₂ + 2H₂O -> H₂SO₄ + 2HBr."
            }
          ]
        },
        {
          "id": "lop11-bai27",
          "title": "27. Đại cương Hữu cơ: Thuyết Cấu tạo, Đồng phân & Danh pháp",
          "level": "Cốt tử 11",
          "readTime": "10 phút",
          "summary": "Cacbon luôn có hóa trị IV, đồng phân cấu tạo, đồng phân hình học cis-trans và danh pháp quốc tế IUPAC.",
          "content": "\n### I. Thuyết Cấu tạo Hóa học\n1. Trong hợp chất hữu cơ, **Cacbon luôn có hóa trị IV**, Hiđro hóa trị I, Oxi hóa trị II, Nitơ hóa trị III.\n2. Các nguyên tử cacbon có thể liên kết trực tiếp với nhau tạo thành mạch cacbon:\n   - Mạch hở không phân nhánh.\n   - Mạch hở có phân nhánh.\n   - Mạch vòng.\n\n---\n\n### II. Đồng phân\n- **Đồng phân** là hiện tượng các chất có cùng công thức phân tử nhưng có cấu tạo hóa học khác nhau nên tính chất khác nhau.\n- Các loại đồng phân:\n  - Đồng phân mạch cacbon.\n  - Đồng phân vị trí nhóm chức / liên kết bội.\n  - Đồng phân hình học (cis - trans): Điều kiện có đồng phân cis-trans ở $R_1R_2C=CR_3R_4$ là $R_1 \\ne R_2$ và $R_3 \\ne R_4$.\n",
          "keyTakeaways": [
            "Cacbon luôn có hóa trị IV trong hợp chất hữu cơ.",
            "Đồng phân: Cùng CTPT nhưng khác CTCT.",
            "Điều kiện đồng phân hình học cis-trans: Các nhóm thế gắn trên cùng 1 nguyên tử C của nối đôi phải khác nhau."
          ],
          "quiz": [
            {
              "question": "Hợp chất hữu cơ C₄H₁₀ có bao nhiêu đồng phân cấu tạo?",
              "options": [
                "1",
                "2",
                "3",
                "4"
              ],
              "correctIndex": 1,
              "explanation": "C₄H₁₀ có 2 đồng phân: butan (mạch thẳng) và 2-metylpropan (isobutan, mạch nhánh)."
            }
          ]
        },
        {
          "id": "lop11-bai28",
          "title": "28. Ankan (CnH2n+2): Parafin & Phản ứng Thế",
          "level": "Trọng tâm 11",
          "readTime": "8 phút",
          "summary": "Công thức chung CnH2n+2, quy tắc thế Markovnikov/thế vào C bậc cao ưu tiên, phản ứng cháy ankan.",
          "content": "\n### I. Khái quát về Ankan\n- Công thức phân tử chung: $C_n H_{2n+2}$ ($n \\ge 1$).\n- Chỉ chứa toàn liên kết đơn $\\sigma$ bền vững.\n\n---\n\n### II. Tính chất hóa học\n1. **Phản ứng thế Halogen ($Cl_2, Br_2$):**\n   - **Quy tắc thế:** Nguyên tử halogen ưu tiên thế vào nguyên tử **cacbon bậc cao hơn** (C liên kết với nhiều C hơn, chứa ít H hơn).\n   - *Ví dụ:* Propan ($CH_3-CH_2-CH_3$) + $Cl_2$ (tỉ lệ 1:1) $\\rightarrow$ Sản phẩm chính là 2-clopropan ($CH_3-CHCl-CH_3$).\n2. **Phản ứng cháy:**\n   $$C_n H_{2n+2} + \\frac{3n+1}{2} O_2 \\xrightarrow{t^\\circ} n CO_2 + (n+1) H_2O$$\n   $$\\mathbf{n_{H_2O} > n_{CO_2}} \\implies \\mathbf{n_{\\text{ankan}} = n_{H_2O} - n_{CO_2}}$$\n",
          "keyTakeaways": [
            "Ankan: CnH2n+2 (n >= 1).",
            "Halogen ưu tiên thế vào C bậc cao hơn.",
            "Đốt ankan: n_H2O > n_CO2 và n_ankan = n_H2O - n_CO2."
          ],
          "quiz": [
            {
              "question": "Đốt cháy hoàn toàn một hidrocacbon X thu được 0.3 mol CO₂ và 0.4 mol H₂O. Số mol của X là:",
              "options": [
                "0.1 mol",
                "0.7 mol",
                "0.3 mol",
                "0.4 mol"
              ],
              "correctIndex": 0,
              "explanation": "n_H2O > n_CO2 nên X là ankan. n_ankan = n_H2O - n_CO2 = 0.4 - 0.3 = 0.1 mol."
            }
          ]
        },
        {
          "id": "lop11-bai29",
          "title": "29. Anken & Ankin: Liên kết Bội & Phản ứng Cộng",
          "level": "Cốt tử 11",
          "readTime": "10 phút",
          "summary": "Quy tắc cộng Mac-cốp-nhi-cốp (Giàu càng giàu thêm), phản ứng thế ion Ag của Ank-1-in.",
          "content": "\n### I. Anken ($C_n H_{2n}$, $n \\ge 2$)\n- Chứa 1 liên kết đôi $C=C$.\n- **Quy tắc cộng Mac-cốp-nhi-cốp:** Khi cộng tác nhân bất đối ($HX$ như $HCl, HBr, H_2O$) vào anken bất đối xứng, phần mang điện dương ($H^+$) ưu tiên cộng vào **C bậc thấp hơn (chứa nhiều H hơn)**, còn $X^-$ cộng vào C bậc cao hơn.\n  *(Mẹo nhớ: \"Giàu H thì càng giàu thêm H\")*.\n- Làm mất màu nước Brom và thuốc tím $KMnO_4$.\n\n---\n\n### II. Ankin ($C_n H_{2n-2}$, $n \\ge 2$)\n- Chứa 1 liên kết ba $C \\equiv C$.\n- **Phản ứng đặc trưng của Ank-1-in (nối ba đầu mạch):**\n  - Nguyên tử H gắn trực tiếp với C nối ba có tính linh động, bị thế bởi ion kim loại $Ag^+$ trong dung dịch $AgNO_3/NH_3$ tạo **kết tủa vàng nhạt**:\n    $$CH \\equiv CH + 2AgNO_3 + 2NH_3 \\rightarrow CAg \\equiv CAg \\downarrow \\text{ (vàng)} + 2NH_4NO_3$$\n  - Đây là phản ứng duy nhất dùng để nhận biết ank-1-in.\n",
          "keyTakeaways": [
            "Quy tắc Markovnikov: H cộng vào C có nhiều H hơn.",
            "Anken và Ankin làm mất màu dung dịch Brom.",
            "Chỉ có Ank-1-in (nối ba đầu mạch) mới tác dụng AgNO3/NH3 tạo kết tủa vàng."
          ],
          "quiz": [
            {
              "question": "Chất nào sau đây tác dụng với dung dịch AgNO₃ trong NH₃ tạo kết tủa màu vàng?",
              "options": [
                "Etilen (CH₂=CH₂)",
                "Axetilen (CH≡CH)",
                "But-2-in (CH₃-C≡C-CH₃)",
                "Metan (CH₄)"
              ],
              "correctIndex": 1,
              "explanation": "Axetilen (CH≡CH) có nối ba ở đầu mạch (ank-1-in) nên thế ion Ag⁺ tạo kết tủa vàng CAg≡CAg."
            }
          ]
        },
        {
          "id": "lop11-bai30",
          "title": "30. Aren (Benzen) & Ancol - Phenol",
          "level": "Trọng tâm 11",
          "readTime": "11 phút",
          "summary": "Vòng benzen (dễ thế khó cộng), bậc ancol, ancol đa chức hòa tan Cu(OH)₂ và tính axit yếu của Phenol.",
          "content": "\n### I. Aren (Benzen $C_6H_6$ & Đồng đẳng)\n- Có vòng benzen 6 cạnh đều với hệ electron liên hợp rất bền.\n- **Tính chất thơm:** \"Dễ thế, khó cộng, bền với chất oxi hóa\".\n  - Toluen ($C_6H_5-CH_3$) tác dụng $KMnO_4$ khi đun nóng tạo axit benzoic.\n\n---\n\n### II. Ancol (Rượu)\n- Bậc của ancol = Bậc của nguyên tử C gắn với nhóm $-OH$.\n- **Ancol đa chức có các nhóm -OH kề nhau** (như Glixerol $C_3H_5(OH)_3$, Etylen glycol $C_2H_4(OH)_2$):\n  - Hòa tan được $Cu(OH)_2$ ở nhiệt độ thường tạo **dung dịch màu xanh lam thẫm**.\n\n---\n\n### III. Phenol ($C_6H_5OH$)\n- Nhóm $-OH$ gắn trực tiếp vào vòng benzen.\n- Có tính axit yếu (mạnh hơn ancol nhưng yếu hơn axit cacbonic $H_2CO_3$), **không làm đổi màu quỳ tím** nhưng tác dụng được với $NaOH$:\n  $$C_6H_5OH + NaOH \\rightarrow C_6H_5ONa + H_2O$$\n- Tác dụng với nước Brom tạo **kết tủa trắng 2,4,6-tribromphenol** (dùng để nhận biết phenol).\n",
          "keyTakeaways": [
            "Ancol có các nhóm -OH kề nhau hòa tan Cu(OH)2 ra dung dịch xanh lam thẫm.",
            "Phenol có tính axit yếu, không đổi màu quỳ nhưng tan trong NaOH.",
            "Phenol tác dụng nước Brom tạo kết tủa trắng."
          ],
          "quiz": [
            {
              "question": "Thuốc thử dùng để nhận biết dung dịch Phenol (C₆H₅OH) là:",
              "options": [
                "Quỳ tím",
                "Dung dịch nước Brom",
                "Dung dịch HCl",
                "Khí CO₂"
              ],
              "correctIndex": 1,
              "explanation": "Phenol phản ứng tức thì với nước Brom tạo kết tủa trắng 2,4,6-tribromphenol."
            }
          ]
        }
      ]
    },
    {
      "id": "stage-5",
      "grade": "Lớp 12",
      "tag": "Trọng tâm Thi THPT",
      "title": "Chặng 5: Toàn bộ Hóa học Lớp 12 Cốt lõi Ôn thi THPT",
      "desc": "Este - Lipit, Cacbohidrat, Amin, Amino axit, Polime, Đại cương kim loại và hợp chất Fe, Cr",
      "color": "#e11d48",
      "lessons": [
        {
          "id": "lop12-bai31",
          "title": "31. Este & Lipit (Chất Béo)",
          "level": "Cực kỳ trọng tâm 12",
          "readTime": "11 phút",
          "summary": "Este no đơn chức mạch hở CnH2nO₂, phản ứng thủy phân xà phòng hóa và bảo toàn khối lượng chất béo.",
          "content": "\n### I. Este\n- Công thức este no, đơn chức, mạch hở: $C_n H_{2n} O_2$ ($n \\ge 2$).\n- Cấu tạo: $R - COO - R'$ ($R'$ phải là gốc hidrocacbon, khác H).\n- **Phản ứng Thủy phân:**\n  - *Môi trường axit:* Thuận nghịch (2 chiều), xúc tác $H_2SO_4$ đặc, đun nóng.\n  - *Môi trường kiềm (Xà phòng hóa):* Một chiều, tạo muối và ancol:\n    $$RCOOR' + NaOH \\xrightarrow{t^\\circ} RCOONa + R'OH$$\n  - *Trường hợp đặc biệt:*\n    - Thủy phân este của phenol ($RCOOC_6H_5$) cần **2 mol NaOH**, tạo 2 muối và nước.\n    - Thủy phân este có nối đôi gắn trực tiếp với gốc $-COO-$ tạo **Anđehit hoặc Xeton**.\n\n---\n\n### II. Lipit (Chất béo / Triglixerit)\n- Là trieste của glixerol với các axit béo: $(RCOO)_3C_3H_5$.\n- Các axit béo cần thuộc làu:\n  - Axit Panmitic: $C_{15}H_{31}COOH$ ($M = 256$, no)\n  - Axit Stearic: $C_{17}H_{35}COOH$ ($M = 284$, no)\n  - Axit Oleic: $C_{17}H_{33}COOH$ ($M = 282$, 1 nối đôi $C=C$)\n  - Axit Linoleic: $C_{17}H_{31}COOH$ ($M = 280$, 2 nối đôi $C=C$)\n- **Quy tắc bảo toàn khối lượng phản ứng xà phòng hóa chất béo:**\n  $$m_{\\text{chất béo}} + m_{NaOH} = m_{\\text{xà phòng (muối)}} + m_{\\text{glixerol}}$$\n  $$\\mathbf{n_{NaOH} = 3 \\cdot n_{\\text{chất béo}} = 3 \\cdot n_{\\text{glixerol}}}$$\n",
          "keyTakeaways": [
            "Este no đơn chức mạch hở: CnH2nO2 (n >= 2).",
            "Chất béo + 3 NaOH -> 3 Muối (xà phòng) + 1 Glixerol C3H5(OH)3.",
            "n_NaOH = 3 * n_glixerol = 3 * n_chất béo."
          ],
          "quiz": [
            {
              "question": "Xà phòng hóa hoàn toàn 0.1 mol triglixerit cần dùng vừa đủ bao nhiêu mol NaOH?",
              "options": [
                "0.1 mol",
                "0.2 mol",
                "0.3 mol",
                "0.4 mol"
              ],
              "correctIndex": 2,
              "explanation": "Triglixerit là trieste của glixerol nên 1 mol chất béo luôn phản ứng với 3 mol NaOH: 0.1 * 3 = 0.3 mol."
            }
          ]
        },
        {
          "id": "lop12-bai32",
          "title": "32. Cacbohidrat: Glucozơ, Saccarozơ, Tinh bột & Xenlulozơ",
          "level": "Trọng tâm 12",
          "readTime": "10 phút",
          "summary": "Phân loại Monosaccarit, Đisaccarit, Polisaccarit; phản ứng tráng bạc (tạo 2 Ag), phản ứng màu của hồ tinh bột.",
          "content": "\n### I. Bảng Phân loại Cacbohidrat\n1. **Monosaccarit (không bị thủy phân):**\n   - **Glucozơ ($C_6H_{12}O_6$):** Có 5 nhóm -OH kề nhau và 1 nhóm -CHO. Tráng bạc tạo $2Ag \\downarrow$.\n   - **Fructozơ ($C_6H_{12}O_6$):** Đồng phân của glucozơ, trong môi trường kiềm chuyển hóa thành glucozơ nên cũng tráng bạc.\n2. **Đisaccarit:**\n   - **Saccarozơ ($C_{12}H_{22}O_{11}$):** Tạo từ 1 gốc $\\alpha$-glucozơ và 1 gốc $\\beta$-fructozơ. Không tráng bạc, nhưng khi thủy phân thì sản phẩm tráng bạc sinh ra $4Ag$.\n3. **Polisaccarit ($(C_6H_{10}O_5)_n$):**\n   - **Tinh bột:** Hỗn hợp amilozơ (mạch không phân nhánh) và amilopectin (mạch phân nhánh). Tác dụng $I_2$ cho màu **xanh tím**.\n   - **Xenlulozơ:** Mạch không phân nhánh, cấu tạo từ các gốc $\\beta$-glucozơ. Dùng sản xuất tơ visco, tơ axetat, thuốc súng không khói xenlulozơ trinitrat.\n",
          "keyTakeaways": [
            "Glucozo tráng bạc tạo 2 Ag kết tủa.",
            "Saccarozo không tráng bạc trực tiếp.",
            "Tinh bột tác dụng dung dịch Iot tạo màu xanh tím.",
            "Amilopectin có mạch phân nhánh."
          ],
          "quiz": [
            {
              "question": "Thủy phân hoàn toàn 1 mol saccarozơ, sau đó cho toàn bộ sản phẩm tham gia phản ứng tráng bạc thì thu được tối đa bao nhiêu mol Ag?",
              "options": [
                "1 mol",
                "2 mol",
                "4 mol",
                "6 mol"
              ],
              "correctIndex": 2,
              "explanation": "1 Saccarozơ thủy phân tạo 1 Glucozơ + 1 Fructozơ. Mỗi phân tử tạo 2 Ag, tổng cộng thu được 2 + 2 = 4 mol Ag."
            }
          ]
        },
        {
          "id": "lop12-bai33",
          "title": "33. Amin: Bậc Amin & So sánh Lực Bazơ",
          "level": "Trọng tâm 12",
          "readTime": "9 phút",
          "summary": "Bậc amin tính theo số nguyên tử H bị thay thế, so sánh lực bazơ và tính chất của Anilin.",
          "content": "\n### I. Bậc của Amin\n- **Bậc amin:** Bằng số nguyên tử $H$ trong phân tử $NH_3$ bị thay thế bởi gốc hiđrocacbon:\n  - Amin bậc 1: $R-NH_2$\n  - Amin bậc 2: $R-NH-R'$\n  - Amin bậc 3: $R-N(R')-R''$\n  *(Khác với bậc của ancol được tính theo bậc của nguyên tử C)*\n\n---\n\n### II. So sánh Lực Bazơ của Amin\n- Gốc đẩy electron (gốc ankyl no $CH_3-, C_2H_5-$) làm **TĂNG** lực bazơ.\n- Gốc hút electron (vòng benzen $C_6H_5-$) làm **GIẢM** lực bazơ.\n- **Thứ tự sắp xếp lực bazơ kinh điển:**\n  $$\\mathbf{\\text{Amin no bậc 2} > \\text{Amin no bậc 1} > NH_3 > \\text{Anilin } (C_6H_5NH_2)}$$\n\n---\n\n### III. Anilin ($C_6H_5NH_2$)\n- Là chất lỏng ít tan trong nước, lực bazơ rất yếu **không làm đổi màu quỳ tím**.\n- Tác dụng với nước Brom tạo **kết tủa trắng 2,4,6-tribromanilin**.\n",
          "keyTakeaways": [
            "Bậc amin = Số gốc hidrocacbon liên kết trực tiếp với Nitơ.",
            "Lực bazơ: Amin no bậc 2 > Amin no bậc 1 > NH3 > Anilin.",
            "Anilin không làm đổi màu quỳ tím, tác dụng nước Brom tạo kết tủa trắng."
          ],
          "quiz": [
            {
              "question": "Chất nào sau đây có lực bazơ mạnh nhất?",
              "options": [
                "NH₃",
                "CH₃NH₂",
                "(CH₃)₂NH",
                "C₆H₅NH₂"
              ],
              "correctIndex": 2,
              "explanation": "(CH₃)₂NH là đimetylamin (amin no bậc 2) có 2 nhóm đẩy e làm mật độ e trên N lớn nhất nên lực bazơ mạnh nhất."
            }
          ]
        },
        {
          "id": "lop12-bai34",
          "title": "34. Amino Axit, Peptit & Protein",
          "level": "Cực kỳ trọng tâm 12",
          "readTime": "12 phút",
          "summary": "Tính lưỡng tính, quỳ tím đổi màu theo tỉ lệ -NH₂ và -COOH, phản ứng màu biure của peptit.",
          "content": "\n### I. 5 Amino Axit Cốt Tử Cần Thuộc Lòng\n1. **Glyxin (Gly):** $H_2N-CH_2-COOH$ ($M = 75$, 1 nhóm $-NH_2$, 1 nhóm $-COOH$ $\\rightarrow$ Quỳ không đổi màu).\n2. **Alanin (Ala):** $CH_3-CH(NH_2)-COOH$ ($M = 89$, quỳ không đổi màu).\n3. **Valin (Val):** $(CH_3)_2CH-CH(NH_2)-COOH$ ($M = 117$, quỳ không đổi màu).\n4. **Axit Glutamic (Glu):** $HOOC-[CH_2]_2-CH(NH_2)-COOH$ ($M = 147$, **2 nhóm -COOH, 1 nhóm -NH₂ $\\rightarrow$ Quỳ hóa ĐỎ**).\n5. **Lysin (Lys):** $H_2N-[CH_2]_4-CH(NH_2)-COOH$ ($M = 146$, **2 nhóm -NH₂, 1 nhóm -COOH $\\rightarrow$ Quỳ hóa XANH**).\n\n---\n\n### II. Tính chất Lưỡng tính\n- Vì có cả nhóm mang tính bazơ ($-NH_2$) và nhóm mang tính axit ($-COOH$), amino axit có tính **lưỡng tính**:\n  - Tác dụng với axit mạnh ($HCl$):\n    $$H_2N-CH_2-COOH + HCl \\rightarrow ClH_3N-CH_2-COOH$$\n  - Tác dụng với bazơ mạnh ($NaOH$):\n    $$H_2N-CH_2-COOH + NaOH \\rightarrow H_2N-CH_2-COONa + H_2O$$\n\n---\n\n### III. Peptit & Phản ứng Màu Biure\n- **Liên kết peptit:** Là liên kết $-CO-NH-$ giữa hai đơn vị $\\alpha$-amino axit.\n- **Phản ứng màu Biure:**\n  - Từ **tripeptit trở lên** (chứa từ 2 liên kết peptit trở lên) hoặc protein tác dụng với $Cu(OH)_2$ trong môi trường kiềm cho hợp chất màu **TÍM ĐẶC TRƯNG**.\n  - *Lưu ý bẫy trắc nghiệm:* **Đipeptit KHÔNG có phản ứng màu biure**.\n",
          "keyTakeaways": [
            "Gly (75), Ala (89), Val (117): Quỳ không đổi màu.",
            "Glu (147): 2 nhóm -COOH -> Quỳ hóa ĐỎ.",
            "Lys (146): 2 nhóm -NH2 -> Quỳ hóa XANH.",
            "Tripeptit trở lên mới có phản ứng màu Biure (màu tím với Cu(OH)2)."
          ],
          "quiz": [
            {
              "question": "Chất nào sau đây KHÔNG tham gia phản ứng màu biure với Cu(OH)₂/NaOH?",
              "options": [
                "Ala-Gly-Val",
                "Lòng trắng trứng (Albumin)",
                "Gly-Ala",
                "Ala-Ala-Ala"
              ],
              "correctIndex": 2,
              "explanation": "Gly-Ala là một đipeptit (chỉ có 1 liên kết peptit) nên không có phản ứng màu biure. Phản ứng biure chỉ xuất hiện từ tripeptit trở lên."
            }
          ]
        },
        {
          "id": "lop12-bai35",
          "title": "35. Polime & Vật liệu Polime",
          "level": "Cơ bản 12",
          "readTime": "9 phút",
          "summary": "Phản ứng trùng hợp, trùng ngưng; phân loại tơ tự nhiên, tơ tổng hợp, tơ bán tổng hợp (nhân tạo).",
          "content": "\n### I. Phân biệt Trùng hợp & Trùng ngưng\n1. **Trùng hợp:** Quá trình kết hợp nhiều monome có **liên kết đôi $C=C$ hoặc vòng kém bền** tạo polime, không giải phóng phân tử nhỏ (Ví dụ: PE, PVC, Poli stiren, Cao su buna).\n2. **Trùng ngưng:** Quá trình kết hợp các monome có **ít nhất 2 nhóm chức có khả năng phản ứng**, đồng thời **giải phóng các phân tử nhỏ (như $H_2O$)** (Ví dụ: Nilon-6,6, Tơ lapsan).\n\n---\n\n### II. Bẫy Phân loại Tơ (Rất hay thi)\n1. **Tơ thiên nhiên:** Bông, len, tơ tằm.\n2. **Tơ hóa học:**\n   - **Tơ bán tổng hợp (Tơ nhân tạo):** Chế biến từ polime thiên nhiên bằng con đường hóa học: **Tơ visco và Tơ axetat** (đều chế tạo từ xenlulozơ).\n   - **Tơ tổng hợp:** Chế tạo hoàn toàn bằng phản ứng trùng hợp/trùng ngưng: Nilon-6, Nilon-6,6, Tơ olon (nitron), Tơ lapsan.\n",
          "keyTakeaways": [
            "Tơ bán tổng hợp (nhân tạo) gồm 2 loại kinh điển: Tơ Visco và Tơ Axetat.",
            "Trùng ngưng có giải phóng phân tử nhỏ (thường là H2O).",
            "Nilon-6,6 là poliamit tạo từ hexametylenđiamin và axit ađipic."
          ],
          "quiz": [
            {
              "question": "Tơ nào sau đây thuộc loại tơ bán tổng hợp (tơ nhân tạo)?",
              "options": [
                "Tơ tằm",
                "Tơ nilon-6,6",
                "Tơ visco",
                "Tơ olon"
              ],
              "correctIndex": 2,
              "explanation": "Tơ visco và tơ axetat là hai loại tơ bán tổng hợp (nhân tạo) được chế tạo từ xenlulozơ thiên nhiên."
            }
          ]
        },
        {
          "id": "lop12-bai36",
          "title": "36. Đại cương Kim loại: Tính chất & Ăn mòn Kim loại",
          "level": "Trọng tâm 12",
          "readTime": "10 phút",
          "summary": "Dãy điện hóa kim loại, quy tắc alpha (α), ăn mòn hóa học và ăn mòn điện hóa học.",
          "content": "\n### I. Tính chất Vật lý của Kim loại\n- Do các **electron tự do** trong mạng tinh thể kim loại gây ra:\n  - Tính dẫn điện, dẫn nhiệt tốt nhất: **Ag > Cu > Au > Al > Fe**.\n  - Kim loại dẻo nhất: **Vàng (Au)**.\n  - Kim loại cứng nhất: **Crom (Cr)**.\n  - Kim loại mềm nhất: **Xesi (Cs)**.\n  - Kim loại có nhiệt độ nóng chảy cao nhất: **Vonfram (W)**.\n  - Kim loại nhẹ nhất: **Liti (Li)**.\n\n---\n\n### II. Ăn mòn Điện hóa học\n- Là quá trình phá hủy kim loại phát sinh dòng điện.\n- **3 Điều kiện để xảy ra ăn mòn điện hóa:**\n  1. Có 2 điện cực khác nhau về bản chất (Kim loại - Kim loại hoặc Kim loại - Phi kim như Fe - C trong gang, thép).\n  2. Các điện cực tiếp xúc trực tiếp hoặc gián tiếp qua dây dẫn.\n  3. Cùng tiếp xúc với một dung dịch chất điện ly (nước mưa, không khí ẩm).\n- **Kim loại có tính khử mạnh hơn sẽ là Anot (-) và BỊ ĂN MÒN TRƯỚC.**\n",
          "keyTakeaways": [
            "Dẫn điện dẫn nhiệt: Ag > Cu > Au > Al > Fe.",
            "Cứng nhất: Cr; Nóng chảy cao nhất: W; Dẻo nhất: Au.",
            "Ăn mòn điện hóa: Kim loại mạnh hơn bị ăn mòn trước (ví dụ thanh Fe gắn Zn thì Zn bị ăn mòn trước, Fe được bảo vệ)."
          ],
          "quiz": [
            {
              "question": "Kim loại nào sau đây có khả năng dẫn điện và dẫn nhiệt tốt nhất?",
              "options": [
                "Đồng (Cu)",
                "Nhôm (Al)",
                "Bạc (Ag)",
                "Vàng (Au)"
              ],
              "correctIndex": 2,
              "explanation": "Bạc (Ag) là kim loại dẫn điện và dẫn nhiệt tốt nhất trong tất cả các kim loại (Ag > Cu > Au > Al > Fe)."
            }
          ]
        },
        {
          "id": "lop12-bai37",
          "title": "37. Kim loại Kiềm, Kiềm thổ & Nhôm",
          "level": "Trọng tâm 12",
          "readTime": "10 phút",
          "summary": "Kim loại nhóm IA (Na, K), IIA (Mg, Ca, Ba), nước cứng và các phương pháp làm mềm nước cứng.",
          "content": "\n### I. Kim loại Kiềm (Nhóm IA) & Kiềm thổ (Nhóm IIA)\n- Kim loại kiềm có mạng tinh thể lập phương tâm khối, liên kết kim loại yếu nên rất mềm, nhẹ, nhiệt độ nóng chảy thấp.\n- Bảo quản kim loại kiềm: **Ngâm chìm trong dầu hỏa**.\n\n---\n\n### II. Nước Cứng & Phương pháp Làm mềm\n- **Nước cứng** là nước chứa nhiều ion **$Ca^{2+}$ và $Mg^{2+}$**.\n- Phân loại nước cứng:\n  1. **Nước cứng tạm thời:** Chứa ion $HCO_3^-$. Làm mềm bằng cách: **Đun sôi**, dùng kiềm vừa đủ ($Ca(OH)_2$), hoặc dùng $Na_2CO_3, Na_3PO_4$.\n  2. **Nước cứng vĩnh cửu:** Chứa ion $Cl^-, SO_4^{2-}$.\n  3. **Nước cứng toàn phần:** Gồm cả tạm thời và vĩnh cửu.\n- **Phương pháp làm mềm mọi loại nước cứng:** Dùng dung dịch **$Na_2CO_3$ hoặc $Na_3PO_4$** để kết tủa $Ca^{2+}, Mg^{2+}$.\n",
          "keyTakeaways": [
            "Kim loại kiềm ngâm bảo quản trong dầu hỏa.",
            "Nước cứng chứa nhiều ion Ca²⁺ và Mg²⁺.",
            "Na2CO3 và Na3PO4 làm mềm được TẤT CẢ các loại nước cứng (tạm thời, vĩnh cửu, toàn phần)."
          ],
          "quiz": [
            {
              "question": "Hóa chất nào sau đây có thể làm mềm được cả nước cứng tạm thời và nước cứng vĩnh cửu?",
              "options": [
                "HCl",
                "NaCl",
                "Na₂CO₃",
                "H₂SO₄"
              ],
              "correctIndex": 2,
              "explanation": "Na₂CO₃ (và Na₃PO₄) tạo kết tủa CaCO₃ ↓ và MgCO₃ ↓ với ion Ca²⁺ và Mg²⁺ nên làm mềm được mọi loại nước cứng."
            }
          ]
        },
        {
          "id": "lop12-bai38",
          "title": "38. Sắt, Crom & Hợp chất",
          "level": "Trọng tâm 12",
          "readTime": "10 phút",
          "summary": "Hợp chất Fe(II) mang tính khử, Fe(III) mang tính oxi hóa; các mức oxi hóa của Crom (+2, +3, +6) và cân bằng Cromat - Đicromat.",
          "content": "\n### I. Hợp chất của Sắt\n- **Hợp chất Fe(II):** Vừa có tính oxi hóa, vừa có **tính khử** (dễ bị oxi hóa lên Fe(III)).\n- **Hợp chất Fe(III):** Chỉ có tính **oxi hóa** (dễ bị khử về Fe(II) hoặc Fe).\n\n---\n\n### II. Crom và Hợp chất\n- Crom là kim loại chuyển tiếp có độ cứng lớn nhất (cắt được thủy tinh).\n- **Hợp chất Cr(III):** $Cr_2O_3$ và $Cr(OH)_3$ là hợp chất **lưỡng tính** (tương tự như nhôm).\n- **Cân bằng Cromat (vàng) - Đicromat (da cam):**\n  $$2CrO_4^{2-} \\text{ (vàng)} + 2H^+ \\rightleftharpoons Cr_2O_7^{2-} \\text{ (da cam)} + H_2O$$\n  - Trong môi trường axit: Chuyển sang màu da cam ($Cr_2O_7^{2-}$).\n  - Trong môi trường kiềm: Chuyển sang màu vàng ($CrO_4^{2-}$).\n",
          "keyTakeaways": [
            "Fe(II) có tính khử, Fe(III) có tính oxi hóa.",
            "Cr2O3 và Cr(OH)3 là hợp chất lưỡng tính.",
            "Cromat CrO4²⁻ màu vàng trong kiềm, Đicromat Cr2O7²⁻ màu da cam trong axit."
          ],
          "quiz": [
            {
              "question": "Trong môi trường axit, dung dịch chứa ion cromat (CrO₄²⁻, màu vàng) sẽ chuyển thành màu gì?",
              "options": [
                "Màu xanh lục",
                "Màu da cam",
                "Màu tím",
                "Màu trắng"
              ],
              "correctIndex": 1,
              "explanation": "Trong môi trường axit (thêm H⁺), cân bằng chuyển dịch tạo ion đicromat Cr₂O₇²⁻ có màu da cam đặc trưng."
            }
          ]
        }
      ]
    },
    {
      "id": "stage-6",
      "grade": "Bí kíp Ôn thi",
      "tag": "Chiến thuật Đỉnh cao",
      "title": "Chặng 6: 4 Định luật Bảo toàn Vạn năng & Phương pháp Giải nhanh",
      "desc": "Bộ công cụ thần tốc giải trắc nghiệm THPT: BTKL, BTNT, BTĐT, BTe, Quy đổi và Bẫy lý thuyết",
      "color": "#0284c7",
      "lessons": [
        {
          "id": "bikip-bai39",
          "title": "39. 4 Định luật Bảo toàn Vạn năng",
          "level": "Tối thượng",
          "readTime": "12 phút",
          "summary": "Phương pháp áp dụng đồng thời Bảo toàn khối lượng, nguyên tố, điện tích và electron để giải bài toán trong 3 dòng.",
          "content": "\n### 1. Bảo toàn Khối lượng (BTKL)\n$$\\sum m_{\\text{trước phản ứng}} = \\sum m_{\\text{sau phản ứng}}$$\n- Kim loại + $HCl \\rightarrow$ Muối + $H_2 \\implies m_{\\text{muối}} = m_{\\text{KL}} + 71 \\cdot n_{H_2}$.\n- Kim loại + $H_2SO_4$ loãng $\\rightarrow$ Muối + $H_2 \\implies m_{\\text{muối}} = m_{\\text{KL}} + 96 \\cdot n_{H_2}$.\n\n---\n\n### 2. Bảo toàn Nguyên tố (BTNT)\nTổng số mol nguyên tố trước phản ứng bằng tổng số mol nguyên tố sau phản ứng:\n- Đốt cháy hợp chất chứa C, H, O:\n  - $n_C = n_{CO_2}$\n  - $n_H = 2 \\cdot n_{H_2O}$\n  - $n_{O \\text{ (chất)}} + 2 \\cdot n_{O_2} = 2 \\cdot n_{CO_2} + n_{H_2O}$\n\n---\n\n### 3. Bảo toàn Điện tích (BTĐT)\nTrong bất kỳ dung dịch chất điện ly nào, tổng điện tích dương của các cation luôn bằng tổng điện tích âm của các anion:\n$$\\sum (n_{\\text{cation}} \\times \\text{hóa trị}) = \\sum (n_{\\text{anion}} \\times \\text{hóa trị})$$\n\n---\n\n### 4. Bảo toàn Electron (BTe)\nTrong phản ứng oxi hóa - khử:\n$$\\sum n_{e \\text{ nhường}} = \\sum n_{e \\text{ nhận}}$$\n- *Ví dụ:* $m$ gam hỗn hợp Fe, Cu tác dụng $HNO_3$ sinh ra $NO$:\n  $$3 \\cdot n_{Fe} + 2 \\cdot n_{Cu} = 3 \\cdot n_{NO}$$\n",
          "keyTakeaways": [
            "BTKL: m trước = m sau.",
            "BTNT: n_C = n_CO2; n_H = 2 * n_H2O.",
            "BTĐT: Tổng số mol ion dương * điện tích = Tổng số mol ion âm * điện tích.",
            "BTe: Tổng mol e cho = Tổng mol e nhận."
          ],
          "quiz": [
            {
              "question": "Dung dịch chứa 0.1 mol Fe²⁺, 0.2 mol Al³⁺, x mol Cl⁻ và 0.15 mol SO₄²⁻. Giá trị của x là:",
              "options": [
                "0.2",
                "0.5",
                "0.8",
                "0.3"
              ],
              "correctIndex": 1,
              "explanation": "Theo BTĐT: 0.1*2 + 0.2*3 = x*1 + 0.15*2 <=> 0.2 + 0.6 = x + 0.3 <=> x = 0.5."
            }
          ]
        },
        {
          "id": "bikip-bai40",
          "title": "40. Phương pháp Quy đổi & Dồn chất trong Hóa Hữu cơ",
          "level": "Nâng cao 9-10 điểm",
          "readTime": "12 phút",
          "summary": "Tư duy quy đổi este phức tạp về HCOOCH₃, CH₂, H₂; quy đổi peptit về CH₂ và CONH.",
          "content": "\n### I. Bản chất Phương pháp Quy đổi\nHỗn hợp este, chất béo hoặc hidrocacbon dù phức tạp đến đâu cũng chỉ được cấu tạo từ các mắt xích cơ bản:\n1. **Dồn chất hidrocacbon:**\n   - Quy đổi về $C$ và $H_2$.\n2. **Quy đổi Este no, đơn chức, mạch hở:**\n   - Tách nhóm este $-COO-$ thành $HCOOCH_3$ và các nhóm $-CH_2-$:\n     $$\\text{Hỗn hợp este} \\xrightarrow{\\text{Quy đổi}} \\begin{cases} HCOOCH_3 \\\\ CH_2 \\end{cases}$$\n3. **Quy đổi Chất béo (Triglixerit):**\n   - Tách thành $(HCOO)_3C_3H_5$, nhóm $-CH_2-$ và $-H_2$ (nếu không no):\n     $$\\text{Chất béo} \\xrightarrow{\\text{Quy đổi}} \\begin{cases} (HCOO)_3C_3H_5 \\quad (n = n_{\\text{chất béo}}) \\\\ CH_2 \\\\ H_2 \\quad (\\text{số mol âm } = -n_{Br_2}) \\end{cases}$$\n",
          "keyTakeaways": [
            "Quy đổi biến bài toán nhiều ẩn phức tạp thành các cụm nguyên tử độc lập.",
            "Este no đơn chức = HCOOCH3 + CH2.",
            "Chất béo = (HCOO)3C3H5 + CH2 + H2 (số mol H2 = - n_Br2)."
          ],
          "quiz": [
            {
              "question": "Khi quy đổi hỗn hợp chất béo gồm triglixerit không no tác dụng vừa đủ với 0.15 mol Br₂, số mol của H₂ trong cụm quy đổi là:",
              "options": [
                "+0.15 mol",
                "-0.15 mol",
                "+0.30 mol",
                "-0.30 mol"
              ],
              "correctIndex": 1,
              "explanation": "Hiđro hóa chất béo không no cần lượng H₂ bằng đúng số mol Br₂ phản ứng. Khi quy đổi về chất béo no thì lượng H₂ trừ bớt đi mang giá trị âm: -0.15 mol."
            }
          ]
        },
        {
          "id": "bikip-bai41",
          "title": "41. Phương pháp Thủy phân hóa & Đồng đẳng hóa",
          "level": "Nâng cao 9-10 điểm",
          "readTime": "11 phút",
          "summary": "Phương pháp đồng đẳng hóa đưa hỗn hợp về chất đầu dãy đồng đẳng kết hợp với nhóm CH₂.",
          "content": "\n### I. Phương pháp Đồng đẳng hóa\n- Khi biết rõ tính chất no/đơn/đa chức của các chất trong hỗn hợp:\n  - Ta đưa hỗn hợp về **chất đầu tiên trong dãy đồng đẳng**.\n  - Phần còn lại là các nhóm **$-CH_2-$**.\n  - *Ví dụ:* Hỗn hợp gồm các axit no, đơn chức mạch hở $\\rightarrow$ Đưa về $HCOOH$ và các nhóm $-CH_2-$.\n\n---\n\n### II. Kết hợp Đồng đẳng hóa và Thủy phân hóa\n- Este thủy phân hóa thành Axit tương ứng + Ancol tương ứng $- H_2O$.\n- Bài toán este phức tạp trở thành bài toán đốt cháy axit và ancol đơn giản.\n",
          "keyTakeaways": [
            "Đồng đẳng hóa đưa chất về đại diện đầu dãy (nhỏ nhất) + nhóm CH2.",
            "Giảm tối đa số ẩn, phương trình giải trực tiếp từ số liệu CO2, H2O và NaOH."
          ],
          "quiz": [
            {
              "question": "Trong phương pháp đồng đẳng hóa, hỗn hợp các ancol no đơn chức mạch hở được quy đổi về:",
              "options": [
                "C₂H₅OH và CH₂",
                "CH₃OH và CH₂",
                "C₃H₇OH và H₂",
                "CH₄ và CO₂"
              ],
              "correctIndex": 1,
              "explanation": "Chất đầu tiên nhỏ nhất trong dãy đồng đẳng ancol no đơn chức mạch hở là CH₃OH (metanol) kết hợp với các nhóm -CH₂-."
            }
          ]
        },
        {
          "id": "bikip-bai42",
          "title": "42. 25 Bẫy Lý Thuyết Trắc Nghiệm Kinh Điển Trong Đề Thi THPT",
          "level": "Cực kỳ trọng tâm",
          "readTime": "12 phút",
          "summary": "Tổng hợp các bẫy câu chữ, bẫy hiện tượng và bẫy công thức thường làm thí sinh mất điểm oan.",
          "content": "\n### 🚩 10 Bẫy Từ Ngữ Thường Gặp\n1. **Kim loại Nhôm (Al):** Có tính khử mạnh, **KHÔNG PHẢI là chất lưỡng tính**. Chỉ có $Al_2O_3$ và $Al(OH)_3$ mới là chất lưỡng tính.\n2. **Đipeptit:** Có 2 gốc amino axit nhưng chỉ có 1 liên kết peptit $\\rightarrow$ **KHÔNG có phản ứng màu biure**.\n3. **Saccarozơ:** **KHÔNG tráng bạc**. Nhưng nếu đề bài bảo *\"Thủy phân saccarozơ rồi lấy sản phẩm đi tráng bạc\"* thì có phản ứng tráng bạc (tạo $4Ag$).\n4. **Anilin ($C_6H_5NH_2$):** Có tính bazơ nhưng **KHÔNG làm đổi màu quỳ tím**.\n5. **Dung dịch Glyxin, Alanin, Valin:** **KHÔNG làm đổi màu quỳ tím** (do số nhóm $-NH_2$ bằng số nhóm $-COOH$).\n6. **Glucozơ và Fructozơ:** Đều tráng bạc, nhưng để **phân biệt** chúng thì dùng **nước Brom** (Glucozơ làm mất màu nước Brom, Fructozơ thì không).\n7. **Ăn mòn điện hóa:** Kim loại **mạnh hơn** sẽ đóng vai trò cực âm (anot) và **bị ăn mòn trước**.\n8. **Fe tác dụng với axit:**\n   - Gặp $HCl, H_2SO_4$ loãng $\\rightarrow Fe^{2+}$.\n   - Gặp $HNO_3, H_2SO_4$ đặc nóng $\\rightarrow Fe^{3+}$.\n   - *Bẫy đặc biệt:* Nếu **Fe dư** tác dụng với dung dịch $HNO_3$ thì sau cùng chỉ thu được muối **$Fe^{2+}$** (vì $Fe + 2Fe^{3+} \\rightarrow 3Fe^{2+}$).\n9. **Tính dẻo, dẫn điện, dẫn nhiệt, ánh kim:** Cả 4 tính chất vật lý chung của kim loại đều do các **electron tự do** gây ra.\n10. **Tơ bán tổng hợp (nhân tạo):** Chỉ gồm **Tơ Visco** và **Tơ Axetat**.\n",
          "keyTakeaways": [
            "Al không phải chất lưỡng tính (chỉ là kim loại có tính khử).",
            "Đipeptit không có phản ứng biure.",
            "Glucozo làm mất màu nước Brom, Fructozo thì không.",
            "Fe dư + HNO3 thu được muối Fe(II)."
          ],
          "quiz": [
            {
              "question": "Cho Fe dư vào dung dịch HNO₃ loãng, sau khi phản ứng xảy ra hoàn toàn thu được dung dịch chứa muối nào?",
              "options": [
                "Fe(NO₃)₃",
                "Fe(NO₃)₂",
                "Cả Fe(NO₃)₂ và Fe(NO₃)₃",
                "Fe(OH)₂"
              ],
              "correctIndex": 1,
              "explanation": "Ban đầu Fe bị oxi hóa lên Fe(NO₃)₃, nhưng do Fe còn dư nên Fe tiếp tục khử Fe³⁺ về Fe²⁺: Fe + 2Fe(NO₃)₃ -> 3Fe(NO₃)₂. Sản phẩm cuối cùng chỉ là Fe(NO₃)₂."
            }
          ]
        }
      ]
    }
  ],
  "elements": [
    {
      "z": 1,
      "sym": "H",
      "name": "Hiđro",
      "m": 1.008,
      "val": "I",
      "cat": "Phi kim",
      "color": "#60a5fa"
    },
    {
      "z": 2,
      "sym": "He",
      "name": "Heli",
      "m": 4.003,
      "val": "0",
      "cat": "Khí hiếm",
      "color": "#c084fc"
    },
    {
      "z": 3,
      "sym": "Li",
      "name": "Liti",
      "m": 6.941,
      "val": "I",
      "cat": "Kim loại kiềm",
      "color": "#f87171"
    },
    {
      "z": 4,
      "sym": "Be",
      "name": "Beri",
      "m": 9.012,
      "val": "II",
      "cat": "Kiềm thổ",
      "color": "#fb923c"
    },
    {
      "z": 5,
      "sym": "B",
      "name": "Bo",
      "m": 10.81,
      "val": "III",
      "cat": "Phi kim",
      "color": "#60a5fa"
    },
    {
      "z": 6,
      "sym": "C",
      "name": "Cacbon",
      "m": 12.01,
      "val": "II, IV",
      "cat": "Phi kim",
      "color": "#60a5fa"
    },
    {
      "z": 7,
      "sym": "N",
      "name": "Nitơ",
      "m": 14.01,
      "val": "I, II, III, IV, V",
      "cat": "Phi kim",
      "color": "#60a5fa"
    },
    {
      "z": 8,
      "sym": "O",
      "name": "Oxi",
      "m": 16.0,
      "val": "II",
      "cat": "Phi kim",
      "color": "#60a5fa"
    },
    {
      "z": 9,
      "sym": "F",
      "name": "Flo",
      "m": 19.0,
      "val": "I",
      "cat": "Halogen",
      "color": "#34d399"
    },
    {
      "z": 10,
      "sym": "Ne",
      "name": "Neon",
      "m": 20.18,
      "val": "0",
      "cat": "Khí hiếm",
      "color": "#c084fc"
    },
    {
      "z": 11,
      "sym": "Na",
      "name": "Natri",
      "m": 22.99,
      "val": "I",
      "cat": "Kim loại kiềm",
      "color": "#f87171"
    },
    {
      "z": 12,
      "sym": "Mg",
      "name": "Magiê",
      "m": 24.31,
      "val": "II",
      "cat": "Kiềm thổ",
      "color": "#fb923c"
    },
    {
      "z": 13,
      "sym": "Al",
      "name": "Nhôm",
      "m": 26.98,
      "val": "III",
      "cat": "Kim loại cơ bản",
      "color": "#fbbf24"
    },
    {
      "z": 14,
      "sym": "Si",
      "name": "Silic",
      "m": 28.09,
      "val": "IV",
      "cat": "Á kim",
      "color": "#a3e635"
    },
    {
      "z": 15,
      "sym": "P",
      "name": "Photpho",
      "m": 30.97,
      "val": "III, V",
      "cat": "Phi kim",
      "color": "#60a5fa"
    },
    {
      "z": 16,
      "sym": "S",
      "name": "Lưu huỳnh",
      "m": 32.07,
      "val": "II, IV, VI",
      "cat": "Phi kim",
      "color": "#60a5fa"
    },
    {
      "z": 17,
      "sym": "Cl",
      "name": "Clo",
      "m": 35.45,
      "val": "I, III, V, VII",
      "cat": "Halogen",
      "color": "#34d399"
    },
    {
      "z": 18,
      "sym": "Ar",
      "name": "Argon",
      "m": 39.95,
      "val": "0",
      "cat": "Khí hiếm",
      "color": "#c084fc"
    },
    {
      "z": 19,
      "sym": "K",
      "name": "Kali",
      "m": 39.1,
      "val": "I",
      "cat": "Kim loại kiềm",
      "color": "#f87171"
    },
    {
      "z": 20,
      "sym": "Ca",
      "name": "Canxi",
      "m": 40.08,
      "val": "II",
      "cat": "Kiềm thổ",
      "color": "#fb923c"
    },
    {
      "z": 24,
      "sym": "Cr",
      "name": "Crom",
      "m": 52.0,
      "val": "II, III, VI",
      "cat": "Kim loại chuyển tiếp",
      "color": "#38bdf8"
    },
    {
      "z": 25,
      "sym": "Mn",
      "name": "Mangan",
      "m": 54.94,
      "val": "II, IV, VII",
      "cat": "Kim loại chuyển tiếp",
      "color": "#38bdf8"
    },
    {
      "z": 26,
      "sym": "Fe",
      "name": "Sắt",
      "m": 55.85,
      "val": "II, III",
      "cat": "Kim loại chuyển tiếp",
      "color": "#38bdf8"
    },
    {
      "z": 29,
      "sym": "Cu",
      "name": "Đồng",
      "m": 63.55,
      "val": "I, II",
      "cat": "Kim loại chuyển tiếp",
      "color": "#38bdf8"
    },
    {
      "z": 30,
      "sym": "Zn",
      "name": "Kẽm",
      "m": 65.38,
      "val": "II",
      "cat": "Kim loại chuyển tiếp",
      "color": "#38bdf8"
    },
    {
      "z": 35,
      "sym": "Br",
      "name": "Brom",
      "m": 79.9,
      "val": "I, V",
      "cat": "Halogen",
      "color": "#34d399"
    },
    {
      "z": 47,
      "sym": "Ag",
      "name": "Bạc",
      "m": 107.87,
      "val": "I",
      "cat": "Kim loại chuyển tiếp",
      "color": "#38bdf8"
    },
    {
      "z": 56,
      "sym": "Ba",
      "name": "Bari",
      "m": 137.33,
      "val": "II",
      "cat": "Kiềm thổ",
      "color": "#fb923c"
    },
    {
      "z": 79,
      "sym": "Au",
      "name": "Vàng",
      "m": 196.97,
      "val": "III",
      "cat": "Kim loại chuyển tiếp",
      "color": "#38bdf8"
    },
    {
      "z": 80,
      "sym": "Hg",
      "name": "Thủy ngân",
      "m": 200.59,
      "val": "I, II",
      "cat": "Kim loại lỏng",
      "color": "#94a3b8"
    },
    {
      "z": 82,
      "sym": "Pb",
      "name": "Chì",
      "m": 207.2,
      "val": "II, IV",
      "cat": "Kim loại cơ bản",
      "color": "#fbbf24"
    }
  ],
  "solubility": [
    {
      "ion": "NO₃⁻ (Nitrat)",
      "note": "TẤT CẢ các muối nitrat đều TAN tốt.",
      "type": "tan"
    },
    {
      "ion": "Na⁺, K⁺, NH₄⁺",
      "note": "Hầu như TẤT CẢ muối của Na, K, NH₄ đều TAN.",
      "type": "tan"
    },
    {
      "ion": "CH₃COO⁻ (Axetat)",
      "note": "Hầu hết đều TAN, AgCH₃COO ít tan.",
      "type": "tan"
    },
    {
      "ion": "Cl⁻ (Clorua)",
      "note": "Hầu hết tan, trừ AgCl ↓ (kết tủa trắng), PbCl₂ ít tan trong nước lạnh.",
      "type": "mixed"
    },
    {
      "ion": "SO₄²⁻ (Sunfat)",
      "note": "Hầu hết tan, trừ BaSO₄ ↓ (trắng), PbSO₄ ↓ (trắng); CaSO₄ và Ag₂SO₄ ít tan.",
      "type": "mixed"
    },
    {
      "ion": "CO₃²⁻ (Cacbonat)",
      "note": "Chỉ tan với Na⁺, K⁺, NH₄⁺; còn lại hầu hết KẾT TỦA (CaCO₃, BaCO₃ ↓ trắng).",
      "type": "ket-tua"
    },
    {
      "ion": "SO₃²⁻ (Sunfit)",
      "note": "Chỉ tan với Na⁺, K⁺, NH₄⁺; còn lại kết tủa (BaSO₃, CaSO₃ ↓ trắng).",
      "type": "ket-tua"
    },
    {
      "ion": "PO₄³⁻ (Photphat)",
      "note": "Chỉ tan với Na⁺, K⁺, NH₄⁺; còn lại kết tủa (Ag₃PO₄ ↓ vàng).",
      "type": "ket-tua"
    },
    {
      "ion": "S²⁻ (Sunfua)",
      "note": "Tan với Na, K, Ba, Ca; còn lại kết tủa (CuS, PbS, FeS, Ag₂S ↓ đen).",
      "type": "ket-tua"
    },
    {
      "ion": "OH⁻ (Hiđroxit)",
      "note": "Chỉ bazơ Na, K, Ba, Ca tan; còn lại kết tủa (Cu(OH)₂ xanh, Fe(OH)₃ nâu đỏ, Al(OH)₃ keo trắng).",
      "type": "ket-tua"
    }
  ],
  "flashcards": [
    {
      "q": "Số proton, electron và nơtron liên hệ như thế nào?",
      "a": "Số p = Số e (trung hòa điện); Số khối A = p + n."
    },
    {
      "q": "Quy tắc Khử cho - O nhận là gì?",
      "a": "Chất KHỬ cho e (số oxh tăng); Chất OXI HÓA nhận e (số oxh giảm)."
    },
    {
      "q": "Dãy hoạt động hóa học của kim loại?",
      "a": "K - Na - Ba - Ca - Mg - Al - Zn - Fe - Ni - Sn - Pb - (H) - Cu - Hg - Ag - Pt - Au."
    },
    {
      "q": "4 Định luật bảo toàn vạn năng gồm những gì?",
      "a": "Bảo toàn Khối lượng, Bảo toàn Nguyên tố, Bảo toàn Điện tích và Bảo toàn Electron."
    },
    {
      "q": "Thang đo pH: Axit, Trung tính, Kiềm?",
      "a": "pH < 7: Môi trường Axit; pH = 7: Trung tính; pH > 7: Môi trường Kiềm (Bazơ)."
    },
    {
      "q": "Công thức este no đơn chức mạch hở?",
      "a": "CnH2nO2 (n >= 2). Thủy phân kiềm tạo muối và ancol."
    },
    {
      "q": "Phản ứng xà phòng hóa chất béo tạo sản phẩm gì?",
      "a": "Chất béo + 3 NaOH -> 3 Muối xà phòng + 1 Glixerol C3H5(OH)3."
    },
    {
      "q": "Thuốc thử nhận biết hồ tinh bột?",
      "a": "Dung dịch Iot (I2) -> Cho hợp chất có màu xanh tím đặc trưng."
    },
    {
      "q": "Phản ứng màu biure áp dụng cho những chất nào?",
      "a": "Tripeptit trở lên và Protein (cho màu tím với Cu(OH)2 trong kiềm). Đipeptit KHÔNG có."
    },
    {
      "q": "Tơ bán tổng hợp (nhân tạo) gồm những loại nào?",
      "a": "Tơ Visco và Tơ Axetat (đều sản xuất từ xenlulozơ thiên nhiên)."
    },
    {
      "q": "Kim loại nào dẫn điện và dẫn nhiệt tốt nhất?",
      "a": "Bạc (Ag), sau đó đến Đồng (Cu), Vàng (Au), Nhôm (Al), Sắt (Fe)."
    },
    {
      "q": "Thứ tự sắp xếp lực bazơ của các amin?",
      "a": "Amin no bậc 2 > Amin no bậc 1 > NH3 > Anilin (C6H5NH2)."
    },
    {
      "q": "Bảo toàn electron phát biểu như thế nào?",
      "a": "Tổng số mol electron nhường (cho) = Tổng số mol electron nhận."
    },
    {
      "q": "Tại sao Al không phải là chất lưỡng tính?",
      "a": "Vì Al là kim loại chỉ nhường e (tính khử). Chỉ có Al2O3 và Al(OH)3 mới là chất lưỡng tính."
    },
    {
      "q": "Hóa chất nào làm mềm được tất cả các loại nước cứng?",
      "a": "Dung dịch Na2CO3 hoặc Na3PO4 (kết tủa triệt để Ca2+ và Mg2+)."
    }
  ]
};
