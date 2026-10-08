/**
 * MIEN NAM GROUP (MNG) - COMMERCIAL VEHICLE CALCULATOR & CASCADER ENGINE
 * 63 Tỉnh Thành - Thuế trước bạ 2% xe thương mại - Phí đường bộ & Phí biển số chuẩn xác
 * Đầy đủ 50+ cấu hình xe (Kim Long, Hyundai, JAC, Teraco, SRM, Chenglong, Howo)
 * Miền Nam Auto - Hotline: 0917 071 798
 */

// ==========================================
// 1. CƠ SỞ DỮ LIỆU ĐẦY ĐỦ 50+ MẪU XE THƯƠNG MẠI
// ==========================================
const MNG_VEHICLE_DATABASE = {
  kim_long: {
    name: "KIM LONG MOTOR",
    models: {
      kl_99_bus: {
        name: "Kim Long 99 (Bus 29-34 Chỗ / 22 Phòng VIP)",
        type: "bus",
        payload_kg: 9900,
        bodies: {
          chassis: { name: "Chassis Sắt xi cơ sở", price: 1850000000, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=60" },
          ghe_ngoi_29: { name: "29 Chỗ Ghế ngồi Cao cấp Universe", price: 1980000000, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=60" },
          ghe_ngoi_34: { name: "34 Chỗ Ghế ngồi Tiêu chuẩn", price: 2050000000, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=60" },
          giuong_nam_22: { name: "22 Phòng VIP Cung Điện Di Động", price: 2450000000, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=60" }
        }
      },
      kl_x9_minibus: {
        name: "Kim Long X9 (Minibus 16-19 Chỗ / Limousine)",
        type: "minibus",
        payload_kg: 3500,
        bodies: {
          tieu_chuan_16: { name: "Bản Tiêu chuẩn 16 Chỗ", price: 860000000, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop&q=60" },
          tieu_chuan_19: { name: "Bản Tiêu chuẩn 19 Chỗ", price: 890000000, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop&q=60" },
          limousine_10: { name: "Bản Limousine VIP 10-12 Chỗ Thương Gia", price: 1150000000, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop&q=60" }
        }
      },
      kl_truck_light: {
        name: "Kim Long Truck 2.4 Tấn (Euro 5)",
        type: "truck",
        payload_kg: 2400,
        bodies: {
          chassis: { name: "Chassis Sắt xi cơ sở", price: 420000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_bat: { name: "Thùng Mui Bạt Dài 4.3m", price: 455000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox 304", price: 462000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_dong_lanh: { name: "Thùng Đông Lạnh Composite (-18°C)", price: 580000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      kl_truck_heavy: {
        name: "Kim Long Heavy Truck 8.5 Tấn",
        type: "truck_heavy",
        payload_kg: 8500,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt Dài 7m5 (9 Bửng)", price: 890000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Container Mở Cửa Hông", price: 910000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      }
    }
  },
  hyundai: {
    name: "HYUNDAI MIỀN NAM",
    models: {
      h150: {
        name: "Hyundai New Porter H150 (1.49 Tấn)",
        type: "truck",
        payload_kg: 1490,
        bodies: {
          chassis: { name: "Chassis Sắt xi cơ sở", price: 375000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_lung: { name: "Thùng Lửng Nhà Máy", price: 395000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_bat: { name: "Thùng Mui Bạt Bửng Nhôm Inox", price: 405000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox Cửa Hông", price: 410000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_dong_lanh: { name: "Thùng Đông Lạnh H150 (-15°C)", price: 520000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      n250sl: {
        name: "Hyundai Mighty N250SL (2.4 Tấn Thùng 4m3)",
        type: "truck",
        payload_kg: 2400,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt Inox Dài 4.3m", price: 525000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox 3 Lớp 4.3m", price: 532000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          bung_nang: { name: "Thùng Bạt Bửng Nâng Thủy Lực", price: 575000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      mighty_110sp: {
        name: "Hyundai Mighty 110SP (7 Tấn Động cơ F150)",
        type: "truck",
        payload_kg: 7000,
        bodies: {
          chassis: { name: "Chassis Sắt xi cơ sở", price: 685000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_bat: { name: "Thùng Mui Bạt 5 Bửng 5.0m", price: 735000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox Tiêu chuẩn", price: 742000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      mighty_110xl: {
        name: "Hyundai Mighty 110XL (7 Tấn Thùng Dài 6m3)",
        type: "truck",
        payload_kg: 6800,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt Dài 6.3m (7 Bửng)", price: 785000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox Dài 6.3m Cửa Hông", price: 795000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      mighty_ex8_gt: {
        name: "Hyundai Mighty EX8 GTL (7.2 Tấn Vuông Thế Hệ Mới)",
        type: "truck",
        payload_kg: 7200,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt 5.8m Inox", price: 765000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox 3 Lớp 5.8m", price: 775000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      hyundai_hd1000: {
        name: "Hyundai HD1000 (Đầu Kéo 410HP Hàn Quốc)",
        type: "tractor",
        payload_kg: 38500,
        bodies: {
          dau_keo: { name: "Đầu Kéo 6x4 2 Cầu Thật", price: 2150000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      }
    }
  },
  jac: {
    name: "JAC MOTORS",
    models: {
      jac_n200s: {
        name: "JAC N200S (1.99 Tấn Động cơ Cummins)",
        type: "truck",
        payload_kg: 1990,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt Dài 4.38m", price: 425000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox Cửa Hông 4.38m", price: 430000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      jac_n350_plus: {
        name: "JAC N350 Plus (3.49 Tấn Thùng 5m25)",
        type: "truck",
        payload_kg: 3490,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt Mở 5 Bửng 5.25m", price: 535000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Container Chống Nước 5.25m", price: 542000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      jac_n650_plus: {
        name: "JAC N650 Plus (6.5 Tấn Thùng 6m2)",
        type: "truck",
        payload_kg: 6500,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt 7 Bửng 6.2m", price: 645000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox 6.2m", price: 655000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      jac_n800_plus: {
        name: "JAC N800 Plus (8.4 Tấn Thùng 7m6)",
        type: "truck_heavy",
        payload_kg: 8400,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt Nhôm Inox 7.6m", price: 725000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Pallet 7.6m", price: 745000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      jac_n900_plus: {
        name: "JAC N900 Plus (9.1 Tấn Thùng 7m)",
        type: "truck_heavy",
        payload_kg: 9100,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt 7.0m", price: 735000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Tiêu chuẩn 7.0m", price: 750000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      }
    }
  },
  teraco: {
    name: "TERACO (Daehan Motors)",
    models: {
      tera_100: {
        name: "Tera 100 (990kg Động cơ Mitsubishi)",
        type: "van_light",
        payload_kg: 990,
        bodies: {
          thung_lung: { name: "Thùng Lửng 2.75m", price: 235000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_bat: { name: "Thùng Mui Bạt Tiêu chuẩn 2.8m", price: 247000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Cửa Hông Inox 2.8m", price: 252000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      tera_star: {
        name: "Tera Star / Star+ (1.25T - 1.9T GDI Turbo)",
        type: "truck",
        payload_kg: 1900,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt Dài 3.05m", price: 258000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox Dập Sóng 3.05m", price: 265000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      tera_v6: {
        name: "Tera-V6 (Xe Tải Van 2 Chỗ / 5 Chỗ Vào Phố 24/7)",
        type: "van",
        payload_kg: 945,
        bodies: {
          van_2_cho: { name: "Van 2 Chỗ (Tải 945kg Thùng 2.5m)", price: 325000000, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop&q=60" },
          van_5_cho: { name: "Van 5 Chỗ (Tải 790kg Thùng 1.6m)", price: 365000000, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop&q=60" }
        }
      },
      tera_180: {
        name: "Tera 180 (1.8 Tấn Máy Dầu Isuzu Thùng 3m3)",
        type: "truck",
        payload_kg: 1800,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt Inox 3.3m", price: 335000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox 3.3m Cửa Hông", price: 342000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      }
    }
  },
  srm: {
    name: "SRM (Shineray Motors)",
    models: {
      srm_868: {
        name: "SRM 868 (Xe Tải Van Cao Cấp 2 Chỗ 868kg)",
        type: "van",
        payload_kg: 868,
        bodies: {
          van_2_cho: { name: "Bản Tiêu Chuẩn Màn Hình Android 2.5m", price: 330000000, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop&q=60" }
        }
      },
      srm_t30: {
        name: "SRM T30 (Xe Tải 1.25 Tấn Thùng 2m9)",
        type: "truck",
        payload_kg: 1250,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt 2.9m", price: 218000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox 2.9m", price: 225000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      srm_k9: {
        name: "SRM K9 (Xe Tải Nhẹ 990kg Siêu Tiết Kiệm)",
        type: "van_light",
        payload_kg: 990,
        bodies: {
          thung_bat: { name: "Thùng Mui Bạt 2.45m", price: 175000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin: { name: "Thùng Kín Inox 2.45m", price: 182000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      }
    }
  },
  chenglong: {
    name: "CHENGLONG (Hải Âu)",
    models: {
      chenglong_h7_tractor: {
        name: "Chenglong H7 (Đầu Kéo 420HP / 480HP)",
        type: "tractor",
        payload_kg: 39500,
        bodies: {
          dau_keo_420: { name: "Đầu Kéo H7 420HP Cầu Láp (6x4)", price: 1280000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          dau_keo_480: { name: "Đầu Kéo H7 480HP Cầu Dầu Siêu Tải", price: 1390000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      chenglong_m3_truck: {
        name: "Chenglong M3 (8.5 Tấn Thùng Siêu Dài 9m9)",
        type: "truck_heavy",
        payload_kg: 8500,
        bodies: {
          thung_bat_9m9: { name: "Thùng Mui Bạt Nhôm Inox 9.9m (9 Bửng)", price: 990000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_kin_pallet: { name: "Thùng Kín Pallet Điện Tử 9.9m", price: 1040000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      }
    }
  },
  howo: {
    name: "HOWO SINOTRUK",
    models: {
      howo_max_tractor: {
        name: "Howo MAX (Đầu Kéo MAN 460HP Siêu Tiết Kiệm)",
        type: "tractor",
        payload_kg: 40000,
        bodies: {
          dau_keo_cau_lap: { name: "Đầu Kéo Howo MAX 460HP Cầu Láp MAN", price: 1360000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          dau_keo_cau_dau: { name: "Đầu Kéo Howo MAX 460HP Cầu Dầu MAN", price: 1420000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      },
      howo_tx_dump: {
        name: "Howo TX D600 (Xe Ben 4 Chân 380HP)",
        type: "dump_truck",
        payload_kg: 16000,
        bodies: {
          thung_duc: { name: "Thùng Đúc Đáy 8mm Thành 6mm Thép K450", price: 1520000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" },
          thung_vuong: { name: "Thùng Vuông Đáy 10mm Thành 8mm", price: 1560000000, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60" }
        }
      }
    }
  }
};

// ==========================================
// 2. CƠ SỞ DỮ LIỆU 63 TỈNH THÀNH & KHU VỰC BIỂN SỐ
// ==========================================
const MNG_PROVINCES = [
  { id: "hcm", name: "TP. Hồ Chí Minh", area: 1, plateFee: 500000 },
  { id: "hn", name: "TP. Hà Nội", area: 1, plateFee: 500000 },
  { id: "bd", name: "Bình Dương", area: 2, plateFee: 150000 },
  { id: "dn", name: "Đồng Nai", area: 2, plateFee: 150000 },
  { id: "la", name: "Long An", area: 2, plateFee: 150000 },
  { id: "tg", name: "Tiền Giang", area: 2, plateFee: 150000 },
  { id: "ct", name: "Cần Thơ", area: 2, plateFee: 150000 },
  { id: "vt", name: "Bà Rịa - Vũng Tàu", area: 2, plateFee: 150000 },
  { id: "tn", name: "Tây Ninh", area: 2, plateFee: 150000 },
  { id: "bp", name: "Bình Phước", area: 2, plateFee: 150000 },
  { id: "bt", name: "Bến Tre", area: 3, plateFee: 150000 },
  { id: "dt", name: "Đồng Tháp", area: 3, plateFee: 150000 },
  { id: "ag", name: "An Giang", area: 3, plateFee: 150000 },
  { id: "kg", name: "Kiên Giang", area: 3, plateFee: 150000 },
  { id: "vl", name: "Vĩnh Long", area: 3, plateFee: 150000 },
  { id: "tv", name: "Trà Vinh", area: 3, plateFee: 150000 },
  { id: "st", name: "Sóc Trăng", area: 3, plateFee: 150000 },
  { id: "hg", name: "Hậu Giang", area: 3, plateFee: 150000 },
  { id: "bl", name: "Bạc Liêu", area: 3, plateFee: 150000 },
  { id: "cm", name: "Cà Mau", area: 3, plateFee: 150000 },
  { id: "ld", name: "Lâm Đồng", area: 2, plateFee: 150000 },
  { id: "dl", name: "Đắk Lắk", area: 2, plateFee: 150000 },
  { id: "dk", name: "Đắk Nông", area: 3, plateFee: 150000 },
  { id: "gl", name: "Gia Lai", area: 3, plateFee: 150000 },
  { id: "kt", name: "Kon Tum", area: 3, plateFee: 150000 },
  { id: "nt", name: "Ninh Thuận", area: 3, plateFee: 150000 },
  { id: "bth", name: "Bình Thuận", area: 3, plateFee: 150000 },
  { id: "kh", name: "Khánh Hòa", area: 2, plateFee: 150000 },
  { id: "py", name: "Phú Yên", area: 3, plateFee: 150000 },
  { id: "bdh", name: "Bình Định", area: 2, plateFee: 150000 },
  { id: "qn", name: "Quảng Ngãi", area: 3, plateFee: 150000 },
  { id: "qnam", name: "Quảng Nam", area: 3, plateFee: 150000 },
  { id: "dna", name: "Đà Nẵng", area: 2, plateFee: 150000 },
  { id: "tth", name: "Thừa Thiên Huế", area: 2, plateFee: 150000 },
  { id: "qt", name: "Quảng Trị", area: 3, plateFee: 150000 },
  { id: "qb", name: "Quảng Bình", area: 3, plateFee: 150000 },
  { id: "ht", name: "Hà Tĩnh", area: 3, plateFee: 150000 },
  { id: "na", name: "Nghệ An", area: 2, plateFee: 150000 },
  { id: "th", name: "Thanh Hóa", area: 2, plateFee: 150000 },
  { id: "nb", name: "Ninh Bình", area: 3, plateFee: 150000 },
  { id: "nd", name: "Nam Định", area: 3, plateFee: 150000 },
  { id: "tb", name: "Thái Bình", area: 3, plateFee: 150000 },
  { id: "hnm", name: "Hà Nam", area: 3, plateFee: 150000 },
  { id: "hd", name: "Hải Dương", area: 2, plateFee: 150000 },
  { id: "hp", name: "Hải Phòng", area: 2, plateFee: 150000 },
  { id: "hy", name: "Hưng Yên", area: 2, plateFee: 150000 },
  { id: "bn", name: "Bắc Ninh", area: 2, plateFee: 150000 },
  { id: "bg", name: "Bắc Giang", area: 3, plateFee: 150000 },
  { id: "qninh", name: "Quảng Ninh", area: 2, plateFee: 150000 },
  { id: "vp", name: "Vĩnh Phúc", area: 2, plateFee: 150000 },
  { id: "pt", name: "Phú Thọ", area: 3, plateFee: 150000 },
  { id: "tnw", name: "Thái Nguyên", area: 2, plateFee: 150000 },
  { id: "tq", name: "Tuyên Quang", area: 3, plateFee: 150000 },
  { id: "hg_north", name: "Hà Giang", area: 3, plateFee: 150000 },
  { id: "cb", name: "Cao Bằng", area: 3, plateFee: 150000 },
  { id: "bk", name: "Bắc Kạn", area: 3, plateFee: 150000 },
  { id: "ls", name: "Lạng Sơn", area: 3, plateFee: 150000 },
  { id: "lc", name: "Lào Cai", area: 3, plateFee: 150000 },
  { id: "yb", name: "Yên Bái", area: 3, plateFee: 150000 },
  { id: "sl", name: "Sơn La", area: 3, plateFee: 150000 },
  { id: "db", name: "Điện Biên", area: 3, plateFee: 150000 },
  { id: "lch", name: "Lai Châu", area: 3, plateFee: 150000 },
  { id: "hb", name: "Hòa Bình", area: 3, plateFee: 150000 }
];

// ==========================================
// 3. LOGIC TÍNH PHÍ XE THƯƠNG MẠI CHUẨN XÁC
// ==========================================
function getCommercialFeeRules(payload_kg, vehicle_type, base_price) {
  // Lệ phí trước bạ: 2%
  const registrationTax = Math.round(base_price * 0.02);

  // Phí kiểm định đăng kiểm (TT 55/2022/TT-BTC)
  let inspectionFee = 330000;
  if (payload_kg > 2000 && payload_kg <= 7000) {
    inspectionFee = 370000;
  } else if (payload_kg > 7000) {
    inspectionFee = 430000;
  }

  // Phí bảo trì đường bộ 12 tháng (TT 70/2021/TT-BTC)
  let roadFee = 2160000; // < 1 tấn
  if (payload_kg >= 1000 && payload_kg < 4000) {
    roadFee = 3240000;
  } else if (payload_kg >= 4000 && payload_kg < 8500) {
    roadFee = 4680000;
  } else if (payload_kg >= 8500 && payload_kg < 19000) {
    roadFee = 7080000;
  } else if (payload_kg >= 19000) {
    roadFee = 12480000;
  }

  // Bảo hiểm TNDS bắt buộc 1 năm có VAT
  let tndsFee = 1026300; // Xe tải dưới 3 tấn
  if (payload_kg >= 3000 && payload_kg <= 8000) {
    tndsFee = 1826000;
  } else if (payload_kg > 8000 && payload_kg <= 15000) {
    tndsFee = 3388000;
  } else if (payload_kg > 15000) {
    tndsFee = 3520000;
  }

  // Bảo hiểm thân vỏ tự nguyện ~ 1.5%
  const bodyInsuranceFee = Math.round(base_price * 0.015);

  return {
    registrationTax,
    inspectionFee,
    roadFee,
    tndsFee,
    bodyInsuranceFee
  };
}

// ==========================================
// 4. KHỞI TẠO DOM & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initCascaderSelects();
  populateProvincesSelect();
  bindCalculatorEvents();
  triggerRecalculate();
});

function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', 'VNĐ');
}

function initCascaderSelects() {
  const brandSelect = document.getElementById('select-brand');
  const modelSelect = document.getElementById('select-model');
  const bodySelect = document.getElementById('select-body');

  if (!brandSelect || !modelSelect || !bodySelect) return;

  // Render Brands
  brandSelect.innerHTML = '';
  Object.keys(MNG_VEHICLE_DATABASE).forEach(brandKey => {
    const brand = MNG_VEHICLE_DATABASE[brandKey];
    const option = document.createElement('option');
    option.value = brandKey;
    option.textContent = brand.name;
    brandSelect.appendChild(option);
  });

  // Handle Brand Change
  brandSelect.addEventListener('change', () => {
    const selectedBrand = brandSelect.value;
    const models = MNG_VEHICLE_DATABASE[selectedBrand]?.models || {};

    modelSelect.innerHTML = '';
    Object.keys(models).forEach(modelKey => {
      const model = models[modelKey];
      const opt = document.createElement('option');
      opt.value = modelKey;
      opt.textContent = model.name;
      modelSelect.appendChild(opt);
    });

    modelSelect.dispatchEvent(new Event('change'));
  });

  // Handle Model Change
  modelSelect.addEventListener('change', () => {
    const selectedBrand = brandSelect.value;
    const selectedModel = modelSelect.value;
    const modelData = MNG_VEHICLE_DATABASE[selectedBrand]?.models[selectedModel];

    if (!modelData) return;

    bodySelect.innerHTML = '';
    Object.keys(modelData.bodies).forEach(bodyKey => {
      const body = modelData.bodies[bodyKey];
      const opt = document.createElement('option');
      opt.value = bodyKey;
      opt.textContent = `${body.name} (${formatCurrency(body.price)})`;
      bodySelect.appendChild(opt);
    });

    bodySelect.dispatchEvent(new Event('change'));
  });

  // Handle Body Change
  bodySelect.addEventListener('change', () => {
    triggerRecalculate();
  });

  // Trigger default selection (Hyundai H150)
  brandSelect.value = "hyundai";
  brandSelect.dispatchEvent(new Event('change'));
}

function populateProvincesSelect() {
  const provinceSelect = document.getElementById('select-province');
  if (!provinceSelect) return;

  provinceSelect.innerHTML = '';
  MNG_PROVINCES.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = `${p.name} (Phí biển: ${formatCurrency(p.plateFee)})`;
    provinceSelect.appendChild(opt);
  });

  provinceSelect.value = 'hcm';
  provinceSelect.addEventListener('change', triggerRecalculate);
}

function bindCalculatorEvents() {
  const optBodyIns = document.getElementById('opt-body-ins');
  const optRegService = document.getElementById('opt-reg-service');
  const optGpsPromo = document.getElementById('opt-gps-promo');
  const enableLoan = document.getElementById('enable-loan');
  const loanRatio = document.getElementById('loan-ratio');
  const loanTenure = document.getElementById('loan-tenure');

  [optBodyIns, optRegService, optGpsPromo, enableLoan].forEach(el => {
    if (el) el.addEventListener('change', triggerRecalculate);
  });

  if (loanRatio) {
    loanRatio.addEventListener('input', () => {
      const valEl = document.getElementById('loan-ratio-val');
      if (valEl) valEl.innerText = `${loanRatio.value}%`;
      triggerRecalculate();
    });
  }

  if (loanTenure) {
    loanTenure.addEventListener('input', () => {
      const valEl = document.getElementById('loan-tenure-val');
      if (valEl) valEl.innerText = `${loanTenure.value} năm (${loanTenure.value * 12} tháng)`;
      triggerRecalculate();
    });
  }
}

// ==========================================
// 5. TÍNH TOÁN & CẬP NHẬT GIAO DIỆN REAL-TIME
// ==========================================
function triggerRecalculate() {
  const brandKey = document.getElementById('select-brand')?.value;
  const modelKey = document.getElementById('select-model')?.value;
  const bodyKey = document.getElementById('select-body')?.value;
  const provinceId = document.getElementById('select-province')?.value;

  if (!brandKey || !modelKey || !bodyKey) return;

  const brandData = MNG_VEHICLE_DATABASE[brandKey];
  const modelData = brandData?.models[modelKey];
  const bodyData = modelData?.bodies[bodyKey];
  const province = MNG_PROVINCES.find(p => p.id === provinceId) || MNG_PROVINCES[0];

  if (!bodyData || !modelData) return;

  const basePrice = bodyData.price;
  const payload = modelData.payload_kg;

  // Calculate fees
  const fees = getCommercialFeeRules(payload, modelData.type, basePrice);

  const includeBodyIns = document.getElementById('opt-body-ins')?.checked || false;
  const includeRegService = document.getElementById('opt-reg-service')?.checked || false;
  const serviceFee = includeRegService ? 3500000 : 0;
  const bodyInsCost = includeBodyIns ? fees.bodyInsuranceFee : 0;
  const plateFee = province.plateFee;

  const totalRollingCost = basePrice + fees.registrationTax + plateFee + fees.inspectionFee + fees.roadFee + fees.tndsFee + bodyInsCost + serviceFee;

  // Update Preview Box
  const thumbEl = document.getElementById('preview-thumb');
  const titleEl = document.getElementById('preview-title');
  const specEl = document.getElementById('preview-spec');
  const priceEl = document.getElementById('preview-price');

  if (thumbEl) thumbEl.src = bodyData.img;
  if (titleEl) titleEl.textContent = `${brandData.name} - ${modelData.name}`;
  if (specEl) specEl.textContent = `Quy cách: ${bodyData.name} | Tải trọng: ${payload >= 1000 ? (payload/1000).toFixed(1) + ' Tấn' : payload + ' Kg'}`;
  if (priceEl) priceEl.textContent = formatCurrency(basePrice);

  // Update Summary Sheet
  const resProv = document.getElementById('res-province-name');
  const resBase = document.getElementById('res-base-price');
  const resTax = document.getElementById('res-reg-tax');
  const resPlate = document.getElementById('res-plate-fee');
  const resInsp = document.getElementById('res-inspection-fee');
  const resRoad = document.getElementById('res-road-fee');
  const resTnds = document.getElementById('res-tnds-fee');
  const resBody = document.getElementById('res-body-ins');
  const resServ = document.getElementById('res-reg-service');
  const resTotal = document.getElementById('res-total-price');

  if (resProv) resProv.textContent = province.name;
  if (resBase) resBase.textContent = formatCurrency(basePrice);
  if (resTax) resTax.textContent = formatCurrency(fees.registrationTax);
  if (resPlate) resPlate.textContent = formatCurrency(plateFee);
  if (resInsp) resInsp.textContent = formatCurrency(fees.inspectionFee);
  if (resRoad) resRoad.textContent = formatCurrency(fees.roadFee);
  if (resTnds) resTnds.textContent = formatCurrency(fees.tndsFee);
  if (resBody) resBody.textContent = includeBodyIns ? formatCurrency(bodyInsCost) : '0 VNĐ (Không chọn)';
  if (resServ) resServ.textContent = includeRegService ? formatCurrency(serviceFee) : '0 VNĐ (Tự làm)';
  if (resTotal) resTotal.textContent = formatCurrency(totalRollingCost);

  // Loan Schedule Calculation
  const isLoanEnabled = document.getElementById('enable-loan')?.checked || false;
  const loanBox = document.getElementById('loan-breakdown-result');
  
  if (isLoanEnabled) {
    if (loanBox) loanBox.style.display = 'block';
    const ratio = parseInt(document.getElementById('loan-ratio')?.value || 80, 10) / 100;
    const years = parseInt(document.getElementById('loan-tenure')?.value || 5, 10);
    const months = years * 12;
    const annualInterest = 0.085; // 8.5%/năm ưu đãi năm đầu
    
    const maxLoanAmount = Math.round(basePrice * ratio);
    const upfrontCash = totalRollingCost - maxLoanAmount;

    // Monthly installment calculation
    const monthlyPrincipal = Math.round(maxLoanAmount / months);
    const firstMonthInterest = Math.round(maxLoanAmount * (annualInterest / 12));
    const firstMonthPayment = monthlyPrincipal + firstMonthInterest;

    const resLoanMax = document.getElementById('loan-res-max');
    const resLoanUpfront = document.getElementById('loan-res-upfront');
    const resLoanMonthly = document.getElementById('loan-res-monthly');

    if (resLoanMax) resLoanMax.textContent = formatCurrency(maxLoanAmount);
    if (resLoanUpfront) resLoanUpfront.textContent = formatCurrency(upfrontCash);
    if (resLoanMonthly) resLoanMonthly.textContent = `${formatCurrency(firstMonthPayment)}/tháng`;
  } else {
    if (loanBox) loanBox.style.display = 'none';
  }
}

// Function to open quote lead modal
function requestQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) modal.classList.add('active');
}

function closeQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) modal.classList.remove('active');
}