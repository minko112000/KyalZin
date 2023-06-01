const empty_box = `
                  <div class="empty-box">
                    <svg id="bee" version="1.0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 300.000000 299.000000"  preserveAspectRatio="xMidYMid meet">  
                    <g transform="translate(0.000000,299.000000) scale(0.100000,-0.100000)"> <path d="M2009 2772 c-46 -30 -122 -109 -169 -177 -66 -95 -149 -293 -239 -566 -18 -53 -40 -104 -51 -114 -10 -9 -44 -23 -76 -32 -32 -8 -71 -24 -86 -35 -15 -10 -43 -22 -61 -25 -33 -5 -34 -4 -40 31 -9 54 16 121 61 171 23 23 43 40 46 37 3 -3 6 1 6 8 0 8 10 25 23 39 l22 25 -27 -17 c-35 -22 -117 -110 -135 -145 -23 -43 -26 -96 -9 -137 18 -43 19 -54 7 -74 -6 -10 -13 -11 -29 -2 -27 14 -35 0 -16 -27 30 -44 93 -18 80 33 -6 22 -3 25 20 25 14 0 40 -6 57 -14 18 -8 55 -25 82 -38 28 -12 54 -23 59 -23 16 0 136 -129 136 -146 0 -9 3 -19 8 -23 7 -8 9 -13 11 -43 1 -13 4 -14 12 -6 21 21 -16 100 -76 162 -54 56 -145 111 -207 127 -16 3 -28 10 -28 15 0 13 42 37 75 43 101 18 122 28 136 65 7 20 14 41 15 46 0 6 4 17 7 25 4 8 29 80 57 160 28 80 57 159 65 177 8 17 15 34 15 38 0 22 90 189 129 239 86 110 104 127 156 151 60 29 62 29 96 13 23 -11 58 -72 74 -130 2 -5 3 -9 5 -10 3 -5 9 -41 15 -91 8 -64 -12 -191 -36 -231 -10 -17 -23 -40 -28 -52 -12 -27 -179 -176 -190 -170 -4 3 -19 -6 -31 -19 -13 -14 -31 -25 -40 -25 -9 0 -25 -9 -35 -20 -10 -11 -23 -20 -30 -20 -39 0 -174 -174 -152 -196 10 -10 37 16 37 36 0 10 7 23 15 30 8 7 15 18 15 25 0 13 67 75 82 75 5 0 24 11 42 25 18 14 38 25 43 25 6 0 16 7 24 16 7 8 25 21 40 27 38 16 185 151 201 185 17 35 61 56 103 48 65 -13 70 -54 20 -181 -52 -135 -51 -133 -123 -166 -37 -16 -78 -36 -92 -43 -14 -8 -59 -24 -100 -35 -79 -23 -85 -25 -168 -62 -63 -27 -80 -44 -56 -53 11 -4 27 3 45 20 15 14 31 26 36 26 4 0 18 4 31 9 30 12 52 11 52 0 0 -6 -5 -13 -12 -17 -11 -7 5 -17 37 -24 6 -1 15 -6 21 -11 24 -20 108 -58 116 -53 9 6 135 -33 153 -46 6 -4 25 -11 42 -15 18 -3 36 -11 39 -16 3 -6 16 -15 27 -20 12 -5 31 -15 43 -22 32 -19 144 -119 144 -130 0 -5 15 -27 33 -50 40 -51 60 -94 92 -194 17 -54 20 -219 4 -229 -4 -2 -6 -11 -2 -19 3 -8 1 -15 -3 -15 -5 0 -15 -15 -23 -32 -18 -44 -100 -128 -117 -121 -8 3 -14 -1 -14 -10 0 -25 50 -3 104 44 211 186 85 617 -234 805 -80 48 -211 94 -264 94 -20 0 -48 12 -77 32 -73 53 -73 59 1 83 88 29 206 92 232 123 39 47 91 179 96 245 4 53 2 61 -23 87 -15 15 -42 31 -61 35 -38 7 -40 11 -23 99 20 108 -24 281 -87 344 -44 44 -109 45 -175 4z"/> <path d="M2111 2509 c-24 -21 -37 -39 -29 -39 15 0 85 67 77 74 -2 2 -24 -14 -48 -35z"/> <path d="M1392 2269 c-31 -20 -106 -132 -175 -262 -24 -45 -28 -62 -25 -121 2 -59 0 -71 -16 -80 -89 -53 -180 -117 -227 -161 l-55 -53 -80 15 c-43 8 -101 21 -129 29 -107 30 -239 46 -330 41 -132 -8 -180 -23 -231 -72 -51 -49 -56 -82 -23 -147 30 -58 128 -154 186 -181 74 -35 73 -33 61 -68 -8 -25 -7 -38 5 -65 19 -39 53 -59 139 -79 127 -30 172 -17 302 84 43 33 84 61 91 61 6 0 38 -30 70 -66 102 -115 181 -152 362 -170 75 -7 86 -14 78 -56 -7 -35 22 -119 52 -150 19 -20 36 -28 57 -27 26 2 27 2 7 6 -13 3 -36 19 -50 36 -36 43 -49 92 -38 147 7 31 6 45 -2 48 -23 8 -10 19 23 20 29 1 35 -3 38 -21 2 -16 9 -21 26 -20 15 2 22 -3 22 -15 0 -29 17 -49 31 -35 9 9 8 20 -5 47 -9 19 -22 37 -29 39 -9 4 -9 6 1 6 6 1 12 8 12 17 0 27 61 6 97 -35 38 -43 44 -65 8 -31 -14 13 -25 18 -25 12 0 -6 8 -19 18 -29 11 -10 22 -27 27 -38 8 -19 8 -19 13 -1 2 10 17 30 32 42 15 13 31 36 35 51 3 16 16 36 28 45 26 20 17 35 -11 17 -12 -7 -27 -9 -38 -4 -21 9 -53 7 -69 -4 -12 -9 -29 -8 -74 3 l-33 8 26 24 c14 14 26 31 26 38 0 8 6 16 14 19 15 6 46 62 46 84 0 23 16 14 73 -44 59 -58 65 -71 45 -91 -9 -9 -9 -12 0 -12 7 0 18 12 24 28 13 31 12 27 22 72 5 19 13 41 19 48 7 9 4 20 -11 40 -45 55 -102 144 -102 157 0 28 13 45 35 45 24 0 55 -28 55 -52 0 -16 37 -54 45 -46 3 3 -1 11 -9 17 -8 7 -12 20 -8 29 7 20 99 112 111 112 5 0 6 11 3 25 -2 14 -7 25 -11 25 -10 0 -72 -59 -98 -93 -16 -21 -27 -27 -43 -22 -29 9 -25 18 22 56 63 52 108 97 108 110 0 15 -17 1 -98 -76 -48 -45 -72 -61 -100 -65 -36 -5 -37 -6 -40 -52 -3 -39 0 -48 13 -48 9 0 13 -5 10 -10 -4 -6 -10 -8 -14 -5 -5 2 -14 -15 -21 -38 -7 -23 -17 -45 -23 -49 -6 -3 -12 -12 -13 -20 -1 -7 -8 -26 -15 -43 -7 -16 -12 -33 -11 -36 1 -4 -10 -17 -23 -29 -14 -13 -25 -28 -25 -34 0 -6 -20 -31 -44 -55 l-44 -43 -105 -5 c-150 -8 -295 25 -342 77 -10 11 -24 20 -31 20 -17 0 -64 40 -64 54 0 5 -10 30 -22 55 -16 34 -23 69 -26 148 l-5 103 30 0 c36 0 53 18 56 56 1 20 -3 29 -15 32 -12 2 -16 -1 -13 -10 3 -7 -1 -22 -8 -32 -12 -17 -14 -17 -48 3 -53 31 -136 45 -187 32 -53 -15 -146 -96 -175 -153 -15 -28 -30 -44 -44 -46 -22 -3 -32 11 -15 21 4 2 1 2 -6 1 -19 -5 -52 18 -51 36 0 10 2 11 5 3 6 -13 56 40 67 71 6 14 10 16 21 6 12 -9 17 -7 26 11 8 15 14 18 19 10 6 -9 11 -8 21 3 7 9 16 13 22 10 12 -8 38 15 38 33 0 14 -3 14 -23 0 -12 -8 -37 -18 -55 -21 -17 -4 -34 -12 -37 -17 -4 -5 -13 -9 -22 -9 -17 0 -63 -44 -63 -61 0 -5 -7 -9 -15 -9 -21 0 -37 -44 -26 -73 12 -32 33 -47 76 -54 33 -5 40 -2 81 38 24 24 44 47 44 52 0 20 64 88 98 104 67 32 184 12 190 -32 3 -27 -20 -70 -38 -71 -18 0 -44 -11 -153 -63 -45 -21 -102 -44 -127 -51 -55 -15 -180 -14 -217 2 -16 6 -31 11 -35 10 -3 -1 -12 5 -18 13 -7 8 -18 15 -25 15 -17 0 -133 125 -147 158 -17 42 -15 55 11 85 56 62 234 82 431 47 69 -12 150 -23 180 -25 30 -2 66 -6 80 -9 93 -24 108 -24 114 -2 7 29 144 133 230 175 l49 24 -6 72 c-7 83 10 153 48 195 13 14 33 44 45 67 12 23 28 47 36 54 8 6 14 17 14 24 0 7 16 27 36 45 30 26 42 31 67 26 47 -9 67 -33 67 -79 0 -53 10 -43 12 12 2 53 -23 81 -78 87 -29 4 -48 -1 -72 -17z m-510 -929 c0 -27 1 -55 2 -62 1 -7 -19 -27 -44 -45 -25 -19 -70 -53 -100 -76 -96 -74 -118 -80 -220 -58 -127 28 -159 49 -141 92 22 53 37 62 104 64 90 4 136 19 292 98 98 49 105 48 107 -13z m868 -4 c0 -8 16 -31 36 -52 30 -33 34 -44 29 -69 -4 -16 -8 -37 -9 -44 -5 -28 -22 -21 -74 32 -52 53 -53 54 -37 83 8 16 15 34 15 40 0 15 22 34 32 28 4 -3 8 -11 8 -18z m-54 -331 c-8 -30 -27 -32 -44 -5 -11 17 -10 20 7 20 11 0 23 5 26 11 11 17 18 2 11 -26z m23 -31 c-12 -27 -13 -27 -16 -7 -5 26 19 77 24 52 2 -8 -2 -29 -8 -45z"/> <path d="M624 1204 c-38 -36 -62 -62 -54 -58 38 20 145 124 127 124 -2 0 -34 -30 -73 -66z"/> <path d="M2020 2259 c-41 -17 -82 -37 -91 -45 -8 -8 -20 -14 -26 -14 -5 0 -20 -11 -33 -25 -13 -14 -19 -25 -13 -25 6 0 16 7 23 15 7 8 17 15 23 15 5 0 25 11 44 26 18 14 33 22 33 18 0 -3 7 0 16 7 9 8 22 14 28 14 19 2 64 23 71 34 3 6 5 11 3 10 -2 0 -37 -14 -78 -30z"/> <path d="M2130 2045 c-73 -16 -95 -26 -45 -20 65 7 105 17 105 26 0 5 -1 8 -2 8 -2 -1 -28 -7 -58 -14z"/> <path d="M1325 1676 c-44 -14 -65 -43 -65 -92 0 -42 26 -103 48 -111 9 -3 24 -12 32 -18 24 -20 120 -32 162 -20 72 20 114 91 73 125 -8 7 -13 16 -10 20 7 11 -25 48 -55 65 -75 42 -124 51 -185 31z m109 -37 c18 -27 11 -48 -22 -60 -43 -16 -82 37 -50 69 19 19 55 14 72 -9z m116 -69 c26 -51 25 -61 -8 -93 -29 -28 -85 -37 -147 -23 -44 10 -83 56 -91 106 -9 55 4 51 54 -15 39 -51 74 -69 106 -53 15 8 17 18 13 58 -6 54 -3 60 29 60 17 0 29 -11 44 -40z m-95 -36 c0 -21 -31 -32 -47 -16 -6 6 -3 15 8 26 20 21 39 16 39 -10z"/> <path d="M2015 1681 c-3 -6 2 -14 12 -18 10 -3 35 -22 56 -41 42 -41 50 -29 11 17 -14 16 -25 34 -24 38 1 12 -47 15 -55 4z"/> <path d="M1970 1645 c-11 -13 -8 -19 14 -40 23 -21 26 -32 26 -88 l0 -64 58 -52 c31 -28 67 -54 80 -58 17 -4 22 -11 19 -30 -2 -13 -10 -28 -17 -33 -8 -5 -11 -12 -8 -16 9 -8 -29 -64 -43 -64 -24 0 -5 70 20 71 13 0 13 2 1 6 -8 3 -27 17 -42 31 -26 24 -41 19 -17 -5 15 -15 0 -60 -23 -66 -12 -4 -17 -10 -13 -17 4 -7 18 -9 31 -6 13 4 24 2 24 -3 0 -13 -68 -71 -83 -71 -7 0 -25 16 -40 35 -31 39 -46 45 -44 15 1 -10 3 -17 6 -14 3 2 18 -9 35 -25 17 -16 51 -35 75 -41 43 -11 71 -30 71 -47 0 -5 -13 -24 -28 -43 -29 -36 -50 -114 -33 -124 5 -4 12 0 14 6 4 8 8 5 12 -9 4 -12 14 -24 22 -28 13 -4 14 -3 3 10 -10 12 -10 18 0 30 10 12 9 15 -5 15 -28 0 -11 60 25 91 26 22 30 31 24 53 -4 17 -11 25 -20 22 -7 -3 -20 4 -28 15 -15 22 -12 29 34 77 16 17 34 45 49 80 6 12 21 27 34 33 12 6 27 20 32 32 8 18 6 24 -10 32 -16 9 -20 20 -19 58 1 26 -2 47 -7 47 -5 0 -9 -10 -9 -22 0 -13 -1 -33 -1 -45 0 -33 -17 -38 -45 -12 -13 12 -24 19 -24 15 0 -5 -7 -3 -15 4 -23 19 -18 27 16 22 l32 -5 -7 39 c-4 22 -12 43 -17 49 -14 15 -11 35 7 35 9 0 14 6 11 13 -5 16 -67 17 -67 0 0 -6 4 -14 9 -18 15 -9 41 -66 41 -88 0 -20 0 -20 -23 1 -27 26 -39 28 -31 7 4 -8 2 -15 -4 -15 -11 0 -22 33 -22 68 0 12 -4 22 -10 22 -5 0 -10 5 -10 11 0 5 4 8 9 5 5 -3 9 6 9 19 0 14 -5 25 -10 25 -6 0 -8 6 -5 14 3 7 -5 23 -19 35 -29 25 -28 25 -44 6z"/> <path d="M295 1435 c-30 -13 -30 -13 -4 -14 14 -1 34 6 45 14 25 19 1 19 -41 0z"/> <path d="M1601 1406 c-9 -11 -8 -14 5 -12 11 1 21 -15 34 -54 l18 -55 1 46 c1 36 -4 50 -22 68 -21 18 -26 20 -36 7z"/> <path d="M1864 1409 c-4 -7 0 -9 14 -5 12 4 26 1 34 -7 8 -8 29 -22 47 -31 46 -24 49 -42 12 -78 -25 -24 -34 -28 -45 -18 -8 6 -13 17 -11 23 5 14 -43 52 -53 42 -4 -3 3 -14 15 -23 12 -9 25 -34 28 -55 l7 -37 48 26 c56 30 70 66 44 115 -8 16 -12 34 -9 39 3 6 1 10 -4 10 -6 0 -11 -7 -11 -15 0 -20 -13 -19 -33 3 -19 20 -72 28 -83 11z"/> <path d="M995 1402 c-52 -11 -74 -64 -54 -134 14 -47 53 -101 76 -104 10 -2 11 1 3 11 -8 9 -6 14 6 19 10 4 21 0 29 -10 9 -13 14 -14 20 -4 4 7 2 16 -6 21 -11 7 -9 10 7 15 16 4 20 11 17 27 -5 22 -5 22 10 2 8 -11 17 -32 20 -45 3 -14 4 3 2 38 -8 115 -58 179 -130 164z m57 -49 c26 -23 23 -51 -7 -59 -43 -11 -73 34 -43 64 16 16 28 15 50 -5z m3 -93 c4 -6 1 -18 -6 -26 -11 -13 -14 -13 -27 0 -8 8 -11 19 -8 25 9 14 33 14 41 1z"/> <path d="M1790 1386 c0 -4 13 -26 29 -49 67 -98 71 -128 35 -231 -18 -49 -11 -59 10 -14 30 62 37 138 16 163 -7 8 -9 15 -5 15 3 0 -3 12 -14 26 -12 15 -21 32 -21 39 0 6 -11 22 -25 35 -14 13 -25 20 -25 16z"/> <path d="M2400 1245 c-33 -84 -46 -103 -125 -179 -39 -37 -94 -79 -125 -93 l-55 -26 30 -13 c17 -7 35 -13 42 -14 6 0 20 -11 30 -24 15 -18 26 -23 49 -19 74 12 224 109 224 145 0 7 9 19 19 25 10 7 26 26 34 43 15 30 15 31 -6 39 -19 7 -22 5 -25 -23 -2 -22 -19 -46 -57 -83 -67 -64 -89 -79 -156 -102 -48 -17 -56 -18 -81 -5 -30 16 -37 34 -13 34 9 0 18 6 21 14 3 7 21 22 40 32 19 10 34 21 34 24 0 3 16 23 36 45 20 21 43 54 50 72 8 18 18 33 23 33 6 0 13 9 16 20 4 11 10 18 15 15 11 -7 17 14 12 42 -6 30 -20 29 -32 -2z"/> <path d="M1872 1061 c-7 -16 -11 -42 -9 -58 2 -15 -2 -42 -9 -59 -12 -28 -11 -33 6 -49 21 -19 28 -7 9 12 -21 21 0 34 30 19 20 -11 35 -32 52 -78 13 -35 25 -67 27 -71 2 -5 -11 -7 -29 -5 -24 2 -37 10 -44 26 -11 25 -18 27 -34 9 -8 -11 -6 -18 8 -31 22 -20 129 -38 134 -23 6 18 62 -17 59 -37 -3 -16 -2 -16 24 0 18 12 22 19 13 22 -91 25 -149 99 -140 180 1 12 -3 22 -9 22 -7 0 -27 7 -46 16 -37 18 -46 51 -16 60 9 3 25 10 34 15 27 14 48 11 48 -7 0 -14 3 -14 15 -4 8 7 15 19 15 26 0 8 5 14 12 14 6 0 9 3 6 6 -4 3 -15 1 -25 -4 -17 -9 -44 -4 -103 22 -10 4 -19 -3 -28 -23z"/> <path d="M1825 1031 c-6 -21 3 -51 16 -51 5 0 9 16 9 35 0 37 -15 47 -25 16z"/> <path d="M1717 896 c-20 -21 -22 -36 -4 -36 8 0 28 -16 46 -35 29 -33 71 -47 71 -25 0 6 -7 10 -14 10 -22 0 -66 45 -75 76 -6 25 -8 26 -24 10z"/> <path d="M2117 903 c-11 -17 5 -53 23 -53 9 0 29 -9 43 -20 14 -11 30 -20 35 -20 5 0 15 -7 22 -15 7 -9 19 -14 27 -11 8 3 11 2 8 -3 -7 -12 92 -41 137 -41 18 0 41 7 52 15 23 17 12 39 -13 25 -21 -11 -144 6 -149 21 -2 5 -12 9 -22 9 -9 0 -23 7 -30 15 -7 8 -16 13 -20 10 -4 -2 -18 7 -30 20 -24 25 -47 34 -34 14 4 -7 1 -10 -7 -7 -8 3 -19 15 -25 27 -7 13 -14 19 -17 14z"/> <path d="M1516 871 c-12 -19 33 -64 51 -50 7 6 13 8 13 4 0 -4 12 0 26 10 36 23 54 13 54 -30 0 -48 23 -100 52 -119 28 -18 109 -29 156 -20 46 9 39 19 -12 18 -25 -1 -69 4 -98 11 -58 13 -58 13 -73 126 -5 38 -10 48 -28 51 -33 6 -57 -2 -57 -18 0 -22 -46 -17 -62 8 -11 16 -17 18 -22 9z"/> <path d="M1925 681 c15 -6 24 -25 33 -68 9 -46 21 -69 48 -97 35 -36 59 -47 52 -23 -3 6 -11 12 -19 12 -7 0 -15 9 -17 19 -2 11 -10 26 -18 33 -7 8 -16 30 -19 51 -11 65 -22 82 -52 81 -25 0 -26 -1 -8 -8z"/> <path d="M2047 668 c-3 -8 -2 -30 2 -49 l8 -34 7 32 c8 35 -6 78 -17 51z"/> </g> </svg> 
                    <svg id="box" version="1.0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 300.000000 299.000000"  preserveAspectRatio="xMidYMid meet">  
                    <g transform="translate(0.000000,299.000000) scale(0.050000,-0.050000)"> <path d="M2440 5330 c0 -26 18 -31 85 -26 47 3 85 15 85 26 0 11 -38 23 -85 26 -67 5 -85 0 -85 -26z"/> <path d="M2225 5327 c-56 -23 -20 -49 58 -43 103 7 133 57 34 54 -37 0 -78 -6 -92 -11z"/> <path d="M2680 5314 c0 -18 28 -35 72 -43 124 -23 117 32 -7 58 -50 11 -65 7 -65 -15z"/> <path d="M2002 5278 c-36 -14 -43 -25 -26 -42 27 -27 147 2 159 39 10 30 -63 31 -133 3z"/> <path d="M2900 5241 c0 -22 107 -101 138 -101 44 0 20 51 -40 85 -69 39 -98 44 -98 16z"/> <path d="M1805 5205 c-64 -32 -79 -54 -50 -72 28 -17 145 44 145 76 0 38 -12 37 -95 -4z"/> <path d="M3100 5098 c0 -44 84 -142 105 -121 13 13 5 40 -24 81 -44 63 -81 81 -81 40z"/> <path d="M3234 4905 c-16 -28 46 -145 76 -145 37 0 37 -1 0 88 -29 68 -58 90 -76 57z"/> <path d="M3313 4686 c-19 -18 -15 -111 5 -144 29 -46 55 -9 46 67 -8 72 -28 101 -51 77z"/> <path d="M2985 4446 c-70 -9 -93 -66 -26 -66 61 0 145 38 131 60 -7 11 -19 19 -26 17 -8 -2 -43 -7 -79 -11z"/> <path d="M3312 4443 c-7 -11 -44 -15 -85 -9 -57 10 -70 6 -63 -16 5 -15 33 -31 63 -34 42 -5 53 -17 53 -57 0 -70 45 -50 68 30 19 66 -9 131 -36 86z"/> <path d="M2755 4358 c-57 -43 -72 -78 -33 -78 31 0 138 79 138 101 0 31 -46 20 -105 -23z"/> <path d="M3400 4354 c0 -22 97 -94 128 -94 34 0 4 56 -46 86 -70 41 -82 42 -82 8z"/> <path d="M3591 4222 c-6 -10 13 -47 42 -82 70 -83 110 -49 45 38 -47 64 -68 75 -87 44z"/> <path d="M2620 4151 c0 -67 24 -103 56 -83 9 5 13 42 8 81 -11 95 -64 97 -64 2z"/> <path d="M3201 4167 c-22 -29 -41 -60 -41 -70 0 -36 57 -15 88 32 62 96 24 128 -47 38z"/> <path d="M3015 4009 c-72 -40 -72 -78 0 -60 61 16 105 47 105 73 0 26 -42 21 -105 -13z"/> <path d="M3720 4023 c0 -49 48 -143 72 -143 34 0 35 9 4 94 -21 58 -76 94 -76 49z"/> <path d="M2724 3978 c10 -29 150 -71 171 -50 22 22 -27 53 -104 66 -60 9 -74 6 -67 -16z"/> <path d="M3791 3802 c-20 -33 11 -165 36 -156 26 9 21 134 -5 160 -10 10 -23 8 -31 -4z"/> <path d="M2927 3670 c-23 -61 3 -100 67 -100 35 0 75 -11 89 -25 20 -20 8 -25 -61 -25 -85 0 -86 -1 -78 -60 5 -33 2 -60 -7 -60 -10 0 -17 -26 -17 -58 0 -58 29 -82 99 -82 63 0 85 111 26 126 -19 5 3 10 50 12 157 4 209 208 65 254 -129 41 -221 48 -233 18z"/> <path d="M3813 3566 c-28 -28 -14 -166 17 -166 22 0 30 22 30 79 0 76 -21 114 -47 87z"/> <path d="M3811 3318 c-21 -59 -20 -144 1 -152 28 -10 54 136 28 162 -12 12 -22 8 -29 -10z"/> <path d="M4668 3225 l-543 -6 -174 -229 c-197 -260 -216 -278 -198 -188 9 45 6 60 -9 50 -12 -7 -29 -47 -36 -88 -9 -49 -73 -152 -193 -309 l-179 -235 -1067 0 c-1047 0 -1068 1 -1089 40 -12 22 -14 40 -6 41 9 0 -2 16 -24 35 -22 19 -41 50 -43 70 -2 20 2 32 8 25 23 -23 91 122 93 199 l2 80 523 5 523 6 43 -70 c43 -69 45 -70 179 -67 74 1 146 -4 158 -12 13 -8 24 -6 24 5 0 11 22 14 49 6 102 -27 757 7 821 43 33 19 71 34 85 34 14 0 25 9 25 20 0 13 -228 20 -645 20 l-645 0 -200 259 -200 259 -575 1 c-316 1 -575 -3 -575 -8 0 -6 81 -111 180 -234 218 -273 219 -238 0 -511 -99 -124 -180 -230 -180 -236 0 -6 86 -5 190 3 l190 13 0 -733 0 -734 1865 6 1865 5 -7 970 -8 970 193 243 c205 261 211 269 157 262 -19 -2 -279 -7 -577 -10z m-3366 -185 c21 0 38 7 38 15 0 9 106 13 235 10 281 -5 287 -6 271 -32 -8 -12 1 -15 22 -7 23 9 29 6 20 -10 -10 -15 -3 -18 21 -9 27 10 32 6 23 -18 -6 -17 -4 -26 6 -21 33 21 94 -68 61 -89 -25 -17 -25 -21 1 -39 34 -22 -107 -29 -470 -22 -192 4 -223 9 -247 43 -16 22 -41 39 -57 39 -15 0 -23 9 -16 19 6 11 -7 38 -29 60 l-40 40 49 13 c28 7 51 23 52 35 1 15 5 14 11 -2 6 -14 28 -25 49 -25z m3543 -3 c43 7 46 -43 5 -77 -16 -13 -25 -31 -20 -39 51 -84 -498 -166 -715 -108 -43 12 -45 54 -6 93 16 16 25 33 20 38 -5 5 8 25 28 44 49 44 143 62 143 27 1 -17 7 -16 20 5 17 27 19 27 20 0 0 -19 6 -22 15 -8 24 35 89 27 76 -10 -9 -25 -5 -25 16 3 32 40 93 47 93 10 1 -19 4 -19 17 1 18 29 65 25 88 -6 9 -12 15 -10 15 6 0 29 62 25 85 -6 8 -11 15 -4 15 16 0 24 8 31 25 21 14 -9 41 -13 60 -10z m-55 -317 c7 -11 -3 -50 -20 -88 -29 -61 -32 -158 -25 -836 9 -841 10 -816 -52 -816 -35 -1 -38 -4 -13 -20 20 -14 -102 -20 -375 -19 -235 1 -405 10 -405 20 0 11 -13 19 -30 19 -16 0 -31 16 -33 35 -2 19 -4 46 -5 59 -2 13 -9 29 -16 37 -8 7 -15 307 -15 665 -1 358 -7 671 -13 695 -17 66 67 245 119 255 94 19 871 13 883 -6z m-1054 -998 c-6 -859 -6 -859 -77 -821 -31 16 -191 24 -522 24 -262 0 -477 6 -477 13 0 7 -286 11 -635 10 -555 -1 -638 3 -661 30 -17 20 -21 21 -12 4 9 -18 6 -23 -8 -15 -14 9 -22 179 -23 525 0 326 -9 525 -23 551 -35 67 -34 67 1057 77 l1052 10 152 204 c83 112 158 204 167 205 8 0 13 -367 10 -817z"/> <path d="M2609 3178 c-15 -24 10 -104 39 -123 15 -10 15 -14 -3 -15 -14 0 -25 -14 -25 -31 0 -20 14 -29 35 -25 19 4 35 20 35 36 0 17 11 37 25 46 14 9 25 38 25 65 0 27 -11 50 -25 51 -14 0 -41 4 -60 8 -19 3 -40 -2 -46 -12z"/> <path d="M3249 3095 c-1 -98 0 -101 18 -40 10 36 31 65 46 65 15 0 27 9 27 20 0 11 -17 20 -38 20 -21 0 -42 9 -45 20 -4 11 -8 -27 -8 -85z"/> <path d="M3772 3068 c-18 -47 -14 -148 6 -148 16 0 42 93 42 153 0 37 -33 34 -48 -5z"/> <path d="M2952 2875 c8 -25 14 -61 13 -80 -4 -57 38 -64 77 -13 64 83 50 138 -33 138 -65 0 -70 -4 -57 -45z"/> </g> </svg> 
                  </div>
`

// DATA START
let MMK = ' Ks'
let username = localStorage.getItem('username')
let CODE;
let SPONSOR;
let BALANCE;
let STAR;
let PEN;
let TOTAL_LIKES;
let LOCATION = 'home'
let INVITE_LINK = 'localhost:8000/signup.php?code='
let SHARE_LINK = 'localhost:8000/php/ui/home.php?text='
const textMonth = month => {
  let text_month
  switch (month) {
    case 0:
      text_month = 'Jan'
      break;
    case 1:
      text_month = 'Feb'
      break;
    case 2:
      text_month = 'Mar'
      break;
    case 3:
      text_month = 'Apr'
      break;
    case 4:
      text_month = 'May'
      break;
    case 5:
      text_month = 'Jun'
      break;
    case 6:
      text_month = 'Jul'
      break;
    case 7:
      text_month = 'Aug'
      break;
    case 8:
      text_month = 'Sep'
      break;
    case 9:
      text_month = 'Oct'
      break;
    case 10:
      text_month = 'Nov'
      break;
    
    default:
      text_month = 'Dec'
  }
  return text_month
}

const userDataShow = () => {
  $('.vb').click(function () {
    navigator.vibrate(20)
  })
  $('.user-item .name').click(function () {
    upboxHide()
    let code = $(this).attr('id')
    getUserData(code)
    $('nav, main, #next-page').hide()
    $('#user-page').show()
  })
}

const getUser = (id, type, CODE) => {
  $('#fav-list-container').html('')
  let data = {
    type: type,
    id: id
  }
  $.ajax({
      url: '../server/get_user.php',
      type: 'POST',
      data: data,
      success: function (r) {
        let users = JSON.parse(r)
        for (let i = 0; i < users.length; i ++) {
          let fav_time = timeCalculator(users[i].fav_time)
          let name = users[i].fname + ' ' + users[i].lname
          let user_item = `
                            <div class="user-item eb">
                              <div class="profile">
                                <img src="../../images/${users[i].profile}">
                              </div>
                              <b id="${users[i].code}" class="name vb">${name}</b>
                              <small>${fav_time}</small>
                            </div>
          `
          $('#fav-list-container')[0].innerHTML += user_item
        }
        userDataShow()
      }
  })
}

const getData = () => {
  let DATE = new Date()
  let date = DATE.getDate()
  let month = textMonth(DATE.getMonth())
  let year = DATE.getFullYear()
  $.ajax({
      url: '../server/get_data.php',
      type: 'GET',
      data: `username=${username}&date=${date}&month=${month}&year=${year}`,
      contentType: false,
      processData: false,
      success: function (r) {
        let data = JSON.parse(r)
        let ID = data.id
        CODE = data.code
        let NAME = data.fname + ' ' + data.lname
        let TYPE = data.account_type
        let STATUS = data.statuss
        let MARK;
        let R = `<small class="type">R</small>`;
        let A = `<small class="type">A</small>`;
        (STATUS == 'user') ? MARK = R : MARK = A;
        let PROFILE = data.profile
        let MEMBERS = data.member
        BALANCE = parseInt(data.balance)
        STAR = parseInt(data.star, 10)
        PEN = parseInt(data.pen, 10)
        let AUTHOR_COUNT = parseInt(data.author_count, 10)
        if (AUTHOR_COUNT >= 10) {
          bonusBoxShow('10_author_invited')
        }
        let FOLLOWER = data.follower
        let EARNING = parseInt(data.earning) + 10000000
        let EMAIL = data.email
        let PHONE = data.phone
        let GENDER = data.gender
        let DOB = data.dob
        let START_DATE = data.start_date
        let END_DATE = data.end_date
        SPONSOR = data.sponsor
        $('.my-name').html(NAME + MARK)
        $('.my-profile > img').attr('src', '../' + PROFILE)
        $('.id').text(CODE)
        $('.members').text(MEMBERS)
        $('.pen').text(PEN)
        $('.author-count').text(AUTHOR_COUNT)
        $('.balance').text(BALANCE + MMK)
        $('.status').text(STATUS)
        $('.star').text(STAR)
        $('.spen').text(PEN)
        $('.earning').text(EARNING + MMK)
        $('.sponsor').text(SPONSOR)
        $('.email').text(EMAIL)
        $('.phone').text(PHONE)
        $('.gender').text(GENDER)
        $('.dob').text(DOB)
        $('.start-date').text(START_DATE)
        
        //HOME
        planDurationCheck(STATUS, END_DATE)
        $('#create-post-btn').click(function () {
          let text = $('#create-post-text').val().trim()
          createPost(PROFILE, NAME, text, CODE, action_id, PEN)
        })
        if ($('#share-content').val() != '') {
          $('nav, main, #next-page, #user-page').hide()
          $('#share-text-box-page').show()
          let id = $('#share-content').val()
          getContent(STAR, CODE, `share${id}`)
        } else {
          $('#home').click()
        }
        
        //WALLET
        $('.log-tab-bar b').click(function () {
          loadingShow()
          $('.log-tab-bar b').removeClass('active')
          $(this).addClass('active')
          let log_type = $(this).attr('id')
          getWalletLogData(CODE, log_type)
        })
        
        //MORE
        const editProfile = edit => {
          switch (edit) {
            case 'edit-name':
              sendEditData(edit, NAME, "")
              break;
            case 'edit-email':
              sendEditData(edit, EMAIL, "")
              break;
            case 'edit-phone':
              sendEditData(edit, PHONE, "")
              break;
            case 'edit-gender':
              sendEditData(edit, GENDER, GENDER)
              break;
            case 'edit-dob':
              sendEditData(edit, DOB, "")
              break;
            default:
              sendEditData('edit-password', '', "")
          }
        }
        $('.edit').click(function () {
          editBoxShow()
          $('#edit-box > input, #edit-box div').hide()
          let id = $(this).attr('id')
          switch (id) {
            case 'edit-name':
              $('.edit-type').text('Edit Name')
              $('#edit-box .name').show()
              $('#edit-box #fname').val(data.fname)
              $('#edit-box #lname').val(data.lname)
              edit = id
              break;
            case 'edit-email':
              $('.edit-type').text('Edit Email')
              $('#edit-box #email').show()
              $('#edit-box #email').val(EMAIL)
              edit = id
              break;
            case 'edit-phone':
              $('.edit-type').text('Edit Phone')
              $('#edit-box #phone').show()
              $('#edit-box #phone').val(PHONE)
              edit = id
              break;
            case 'edit-gender':
              $('.edit-type').text('Edit Gender')
              $('#edit-box div').show()
              if (GENDER == 'male') {
                $('#edit-box #male').prop('checked', true)
              } else {
                $('#edit-box #female').prop('checked', true)
              }
              edit = id
              break;
            case 'edit-dob':
              $('.edit-type').text('Edit Date of Birth')
              $('#edit-box #dob').show()
              $('#edit-box #dob').val(DOB)
              edit = id
              break;
            default:
              $('.edit-type').text('Edit Password')
              $('#edit-box .password').show()
              edit = id
          }
        })
        $('.edit-btn').click(function () {
          editProfile(edit)
        })
      }
  })
}

const getUserData = code => {
  loadingShow()
  $.ajax({
    url: '../server/get_data.php',
    type: 'GET',
    data: 'user_code='+code,
    contentType: false,
    processData: false,
    success: function (r) {
      let data = JSON.parse(r)
      let NAME = data.fname + ' ' + data.lname
      let STATUS = data.statuss
      let MARK;
      let R = `<small class="type">R</small>`;
      let A = `<small class="type">A</small>`;
      (STATUS == 'user') ? MARK = R : MARK = A;
      $('#user-page .bar .user-name').html(NAME)
      $('#user-page .user-profile img').attr('src', '../' + data.profile)
      $('#user-page > .user-name').html(NAME + MARK)
      $('#user-page .balance').text(data.balance + MMK)
      $('#user-page .star').text(data.star)
      $('#user-page .earning').text(data.earning + MMK)
      $('.copy-link-div small').text(INVITE_LINK + code)
      $('.copy-link-div i').click(function () {
        navigator.clipboard.writeText($('.copy-link-div small').text())
      })
      getContent(STAR, CODE, code)
    }
  })
}

const likesMarkCheck = (user_code) => {
  let data = {
    user_code: user_code,
    likes: 'likes'
  }
  $.ajax({
    url: '../server/likes_check.php',
    type: 'POST',
    data: data,
    dataType: "text",
    success: function (r) {
      let likes = JSON.parse(r)
      for (let i = 0; i < likes.length; i ++) {
        $(`#${likes[i].box_id} .fa-thumbs-up`).addClass('fa-solid')
      }
    }
  })
}

const saveMarkCheck = (user_code) => {
  let data = {
    user_code: user_code,
    save: 'save'
  }
  $.ajax({
    url: '../server/save_check.php',
    type: 'POST',
    data: data,
    dataType: "text",
    success: function (r) {
      let save = JSON.parse(r)
      for (let i = 0; i < save.length; i ++) {
        $(`#${save[i].box_id} .fa-bookmark`).addClass('fa-solid')
      }
    }
  })
}

const sentStarMarkCheck = (user_code) => {
  let data = {
    user_code: user_code,
    star: 'star'
  }
  $.ajax({
    url: '../server/star_check.php',
    type: 'POST',
    data: data,
    dataType: "text",
    success: function (r) {
      let star = JSON.parse(r)
      for (let i = 0; i < star.length; i ++) {
        $(`#${star[i].box_id} .fa-star`).addClass('fa-solid')
        $(`#${star[i].box_id} .fa-star`).css('pointerEvents', 'none')
      }
    }
  })
}

const removePostCheck = (user_code) => {
  let data = {
    user_code: user_code,
    removed_post: 'removed_post'
  }
  $.ajax({
    url: '../server/removed_post_check.php',
    type: 'POST',
    data: data,
    dataType: "text",
    success: function (r) {
      let removed_post = JSON.parse(r)
      for (let i = 0; i < removed_post.length; i ++) {
        $(`#${removed_post[i].box_id}`).remove()
      }
    }
  })
}

const totalLikesCalculate = (contents_code, likes, user_code) => {
  if (contents_code == user_code) {
    TOTAL_LIKES += parseInt(likes, 10)
    $('.total-likes').text(TOTAL_LIKES)
  }
}

const getContent = (STAR, CODE, type) => {
  TOTAL_LIKES = 0
  TOTAL_POSTS = 0
  $('.text-box').remove()
  loadingShow()
  $.ajax({
      url: '../server/get_content.php',
      type: 'GET',
      data: `username=${username}&type=${type}&code=${CODE}`,
      contentType: false,
      processData: false,
      success: function (r) {
        let contents = JSON.parse(r)
        if (contents.length == 0) {
          $('.total-posts').text(0)
          $('.contents-empty-container').removeClass('empty')
          if (type == 'all') {
              $('#text-box-container').addClass('empty')
            } else if (type == 'profile') {
              $('#profile-page .posts-text-box-container').addClass('empty')
            } else if (type.length == 11) {
              $('#user-page .posts-text-box-container').addClass('empty')
            } else if (type.slice(0,5) == 'share') {
              $('#share-text-box-page .posts-text-box-container').addClass('empty')
            } else {
              $('#next-page-text-box-container').addClass('empty')
            }
          $('.empty').html(empty_box)
          $('.total-likes').text(0)
        } else {
          $('.contents-empty-container').html('')
          $('.contents-empty-container').removeClass('empty')
          for (let i = 0; i < contents.length; i++) {
            TOTAL_POSTS += 1
            let time = timeCalculator(contents[i].time)
            let content_box = `
              <div id="${contents[i].id}" class="text-box eb">
                <div class="whois">
                  <div class="profile">
                    <img src="../../images/${contents[i].profile}">
                  </div>
                  <div id="${contents[i].code}" class="name vb">${contents[i].name}</div>
                  <small class="duration">${time}</small>
                  <i class="vb up fa-solid fa-ellipsis-vertical text-box-more-icon"></i>
                </div>
                <div class="text">
                  <p>${contents[i].content}</p>
                </div>
                <div class="controls">
                  <div class="like-text">
                    <small id="likes-count" class='fav vb up'>${contents[i].likes}</small>
                    <i id="likes" class="fa-regular vb fa-thumbs-up thumbs"></i>
                  </div>
                  <div class="collect-text">
                    <small id="save-count" class='fav vb up'>${contents[i].save}</small>
                    <i id="save" class="fa-regular vb fa-bookmark thumbs"></i>
                  </div>
                  <div class="give-star">
                    <small id="star-count" class='fav vb up'>${contents[i].star}</small>
                    <i id="star" class="fa-regular fa-star vb thumbs"></i>
                  </div>
                  <div class="share-text up vb">
                    <i class="fa-solid fa-share"></i>
                  </div>
                </div>
              </div>
        `
            if (type == 'all') {
              $('#text-box-container')[0].innerHTML += content_box
            } else if (type == 'profile') {
              $('#profile-page .posts-text-box-container')[0].innerHTML += content_box
              totalLikesCalculate(contents[i].code, contents[i].likes, CODE)
              $('.total-posts').text(TOTAL_POSTS)
            } else if (type.length == 11) {
              $('#user-page .posts-text-box-container')[0].innerHTML += content_box
              totalLikesCalculate(contents[i].code, contents[i].likes, type)
            } else if (type.slice(0,5) == 'share') {
              $('#share-text-box-page .posts-text-box-container')[0].innerHTML += content_box
            } else {
              $('#next-page-text-box-container')[0].innerHTML += content_box
            }
          }
          likesMarkCheck(CODE)
          saveMarkCheck(CODE)
          sentStarMarkCheck(CODE)
          removePostCheck(CODE)
        }
        
        //HOME
        if (STAR <= 0) {
          $('.text-box .fa-star').css('pointerEvents', 'none')
        } else {
          $('.text-box .fa-star').css('pointerEvents', 'auto')
        }
        $('.vb').click(function () {
          navigator.vibrate(20)
        })
        $('.whois .name').click(function () {
          let code = $(this).attr('id')
          getUserData(code)
          $('nav, main, #next-page').hide()
          $('#user-page').show()
        })
        $('.whois .text-box-more-icon').click(function () {
          let box_id = $(this).parent().parent().attr('id')
          let writer_id = $(`#${box_id}`).children('.whois').children('.name').attr('id')
          action_id = box_id
          $('.text-box-more-item').show()
          if (writer_id == CODE) {
            $('#text-box-more-page .r').hide()
          } else {
            $('#text-box-more-page .w').hide()
          }
        })
        $('#submit-report').click(function () {
          reportPost(CODE, PEN)
        })
        $('.text-box-more-item').click(function () {
          if ($(this).hasClass('edit-post')) {
            editPostCheck()
          }
          if ($(this).hasClass('delete-post')) {
            deletePost()
          }
          if ($(this).hasClass('remove-post')) {
            removePost()
          }
          if ($(this).hasClass('report-post')) {
            $('#report-content').val('')
          }
          if ($(this).hasClass('copy-link')) {
            copyLink(SHARE_LINK)
          }
          if ($(this).hasClass('copy-text')) {
            copyText()
          }
        })
        $('.fav').click(function () {
          $('#fav-list-container').html(empty_box)
          if ($(this).text() != 0) {
            $('#fav-list-container').html('')
            let type;
            if ($(this).attr('id') == 'likes-count') {
              type = 'likes'
            } else if ($(this).attr('id') == 'save-count') {
              type = 'save'
            } else {
              type = 'star'
            }
            favList($(this).parent().parent().parent().attr('id'), type)
          }
        })
        $('.thumbs').click(function () {
          $('.fav').removeClass('thumbs-data-target')
          let box_id = $(this).parent().parent().parent().attr('id')
          let fav_type = $(this).attr('id')
          let fav_time = new Date().getTime()
          $(`#${box_id} #${fav_type}-count`).addClass('thumbs-data-target')
          if ($(this).hasClass('fa-solid')) {
            $(this).removeClass('fa-solid')
            $(this).addClass('fa-regular')
            fav(fav_type, box_id, CODE, '-', fav_time)
          } else {
            $(this).removeClass('fa-regular')
            $(this).addClass('fa-solid')
            fav(fav_type, box_id, CODE, '+', fav_time)
          }
          sentStarBan()
        })
        $('.controls .give-star .fa-regular').click(function () {
          let box_id = $(this).parent().parent().parent().attr('id')
          let sent_user_code = CODE
          let receive_user_code = $(`#${box_id} .whois .name`).attr('id')
          sendStar(sent_user_code, receive_user_code)
        })
        $('.invite-banner .invite-link-copy').click(function () {
          navigator.clipboard.writeText(INVITE_LINK + CODE)
        })
        
        
        //UP-BOX
        $('.up').click(function () {
          upboxShow()
          $('#up-box > div').hide()
          if ($(this).hasClass('register-writer')) {
            $('#register-writer-page').show()
          } else {
            if ($(this).hasClass('fav')) {
              $('#fav-list-container').show()
            } else {
              if ($(this).hasClass('report-post')) {
                $('#report-post-page').show()
                $('#pen-box').show()
              } else {
                if ($(this).hasClass('create-post')) {
                  $('#create-post-page').show()
                  $('#pen-box').show()
                } else {
                  if ($(this).hasClass('text-box-more-icon')) {
                    $('#text-box-more-page').show()
                  } else {
                    if ($(this).hasClass('invite') || $(this).hasClass('share-text')) {
                      if ($(this).hasClass('invite')) {
                        fn = 'Invite Member'
                        $('#invite-url').text(INVITE_LINK + CODE)
                        inviteSocial(INVITE_LINK + CODE)
                      } else {
                        fn = 'Share Post'
                        let id = $(this).parent().parent().attr('id')
                        $('#invite-url').text(SHARE_LINK + id)
                        inviteSocial(SHARE_LINK + id)
                      }
                      $('#invite-box .title').text(fn)
                      $('#invite-page').show()
                    } else {
                      $('.input input').val('')
                      $('.upload-slip').val('')
                      $('#upload-slip').html('+')
                      $('.input').removeClass('label-up')
                      $('.target').css('--myVar', '6px')
                      $('#money-edit-page').show()
                    }
                  }
                }
              }
            }
          }
        })
        
        loadingHide()
      }
  })
}

window.addEventListener('load', () => {
  getData()
})


//NAV
const top_alert = (content, br) => {
  $('#top-alert').text(content)
  $('#top-alert').css({
    transform: 'translateY(50px)',
    border: `1px solid ${br}`
  })
  setTimeout(() => {
  $('#top-alert').css('transform','translateY(-110%)')
  }, 3000)
}

$('nav div').click(function () {
  $('nav div').removeClass('active')
  $(this).addClass('active')
  $('.page').hide()
  let page_id = $(this).attr('id')
  LOCATION = page_id
  $(`#${page_id}-page`).show()
  if (page_id == 'home') {
    getContent(STAR, CODE, 'all')
  } else if (page_id == 'wallet') {
    $('#all_log').click()
  } else if (page_id == 'profile') {
    $('#profile-page .tab #my-posts').click()
  }
})



//MAIN

const loadingShow = () => {
  $('#loading').css('display', 'flex')
}

const loadingHide = () => {
  $('#loading').css('display', 'none')
}

const addData = (data) => {
  $.ajax({
    url: '../server/add_data.php',
    type: 'POST',
    data: data,
    dataType: "text",
    success: function(r) {
      if (r == 'OK') {
        top_alert('Successful', '#265828')
        PEN -= 1
        $('.pen').text(PEN)
        upboxHide()
        $('#create-post-text').val('')
        $('.create-post-text-check small').text(0)
        unablePost()
      } else {
        top_alert('Something wrong', '#265828')
      }
    }
  })
}

const editData = (data) => {
  $.ajax({
    url: '../server/edit_data.php',
    type: 'POST',
    data: data,
    dataType: "text",
    success: function(r) {
      $('.thumbs-data-target').text(r)
    }
  })
}

$('main, nav, #next-page, .extra-page').mousedown(function () {
  upboxHide()
  logoutBoxHide()
  editBoxHide()
})

const muted = () => {
  $('nav, main, #next-page, .extra-page').css('opacity', .3)
}

const bright = () => {
  $('nav, main, #next-page, .extra-page').css('opacity', 1)
}

$('.fa-copy').click(function () {
  $(this).removeClass('fa-copy')
  $(this).addClass('fa-check-double')
  $(this).css('color', '#265828')
  $('.fa-check-double').css('pointerEvents', 'none')
  setTimeout(() => {
    $('.fa-check-double').addClass('fa-copy')
    $('.fa-check-double').removeClass('fa-check-double')
    $('.fa-copy').css('color', '#2f599d')
    $('.fa-copy').css('pointerEvents', 'auto')
  }, 3000);
})


// HOME
let action_id;

const bonusAPI = (bonus_type) => {
  let data = {
    bonus_type: bonus_type,
  }
  $.ajax({
      url: '../server/bonusAPI.php',
      type: 'POST',
      data: data,
      success: function (r) {
        if (r == 'OK') {
          bonusBoxHide()
          buyStarANDsellStar(CODE, 'ten_member_invited_log', 0)
        }
      }
  })
}

const bonusBoxShow = (bonus_type) => {
  $('#bonus-box').css('display', 'flex')
  $('main, nav').css('pointerEvents', 'none')
  muted()
  $('#bonus-claim').click(function () {
    bonusAPI(bonus_type)
  })
}

const bonusBoxHide = () => {
  location.reload()
}

const planDurationCheck = (status, end_date) => {
  if (status != 'user') {
    $('#post').show()
    $('.register-writer-banner').hide()
    $('.plan-duration-box').show()
    let days = $('.plan-duration-box .d b')
    let hours = $('.plan-duration-box .h b')
    let minutes = $('.plan-duration-box .m b')
    let seconds = $('.plan-duration-box .s b')
    let interval_id = setInterval(function() {
      let dur;
      now_date = new Date().getTime()
      if (end_date.slice(0, 9) != 'unlimited') {
        dur = end_date - now_date
      } else {
        dur = now_date - end_date.slice(9, end_date.length)
      }
      let d = Math.floor(dur / (1000 * 60 * 60 * 24))
      let h = Math.floor(dur % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      let m = Math.floor(dur % (1000 * 60 * 60) / (1000 * 60))
      let s = Math.floor(dur % (1000 * 60) / (1000))
      if (d.toString().length == 1) {
        d = `00${d}`
      } else if (d.toString().length == 2) {
        d = `0${d}`
      } else {
        d = d
      }
      h = (h.toString().length == 1) ? h = '0' + h : h = h;
      m = (m.toString().length == 1) ? m = '0' + m : m = m;
      s = (s.toString().length == 1) ? s = '0' + s : s = s;
      days.text(d)
      hours.text(h)
      minutes.text(m)
      seconds.text(s)
      if (parseInt($('.d b').text()) > 1) {
        $('.d small').text('Days')
      } else {
        $('.d small').text('Day')
      }
      if (parseInt($('.h b').text()) > 1) {
        $('.h small').text('Hours')
      } else {
        $('.h small').text('Hour')
      }
      if (parseInt($('.m b').text()) > 1) {
        $('.m small').text('Minutes')
      } else {
        $('.m small').text('Minute')
      }
      if (parseInt($('.s b').text()) > 1) {
        $('.s small').text('Seconds')
      } else {
        $('.s small').text('Second')
      }
    }, 1000)
  } else {
    $('#post').hide()
    $('.register-writer-banner').show()
    $('.plan-duration-box').hide()
  }
}

const sentStarBan = () => {
  $('.text-box .give-star .fa-solid').css('pointerEvents', 'none')
}

const timeCalculator = time => {
  let current_time = new Date().getTime()
  let diff = Math.floor((current_time - time) / 1000)
  if (diff < 1) {
   return('just now')
  } else if (diff < 60) {
    return(`${diff} s ago`)
  } else if (diff >= 60 && diff < 3600) {
    return(`${Math.floor(diff / 60)} min ago`)
  } else if (diff >= 3600 && diff < 86400) {
    return(`${Math.floor(diff / 3600)} h ago`)
  } else if (diff >= 86400 && diff < 2592000) {
    return(`${Math.floor(diff / 86400)} d ago`)
  } else if (diff >= 2592000 && diff < 31104000) {
    return(`${Math.floor(diff / 2592000)} mon ago`)
  } else {
    return(`${Math.floor(diff / 31104000)} y ago`)
  }
}

const unablePost = () => {
  if ($('#create-post-text').val().trim() == '') {
    $('#create-post-text').css('borderColor', '#2f599d')
  } else {
    $('#create-post-text').css('borderColor', '#bb2124')
  }
  $('#create-post-btn').css({
    pointerEvents: 'none',
    opacity: '.5'
  })
}

const ablePost = () => {
  $('#create-post-text').css('borderColor', '#2f599d')
  $('#create-post-btn').css({
    pointerEvents: 'auto',
    opacity: '1'
  })
}

const createPost = (profile, name, text, user_code, box_id, PEN) => {
  if (PEN > 0) {
    if (text.length > 280 || text == '') {
      unablePost()
      if (text == '') {
        $('.create-post-text-check small').text(0)
      } else {
        $('.create-post-text-check small').text(text.length)
      }
    } else {
      if ($('#create-post-btn').hasClass('edit-post-btn')) {
        let data = {
          'type': 'edit_post',
          'box_id': action_id,
          'content': text
        }
        addData(data)
      } else {
        time = new Date().getTime()
        let data = {
          'type': 'create_post',
          'profile': profile,
          'name': name,
          'code': user_code,
          'time': time,
          'content': text
        }
        addData(data)
      }
    }
  } else {
    top_alert('Not enough pen', '#bb2124')
  }
}

const editPostCheck = () => {
  let old_text = $(`#${action_id} .text`).text().trim()
  $('#create-post-text').val(old_text)
  $('.create-post-text-check small').text(old_text.length)
  $('#create-post-text').keyup(function () {
    let new_text = $(`#create-post-text`).val().trim()
    if (new_text.length > 280 || new_text == old_text || new_text == '') {
      unablePost()
    } else {
      ablePost()
    }
  })
}

const deletePost = () => {
  $(`#${action_id}`).remove()
  let box_id = action_id
  let data = {
    'type': 'delete_post',
    'box_id': box_id
  }
  addData(data)
}

const reportPost = (CODE, PEN) => {
  if (PEN > 0) {
    let text = $('#report-content').val()
    if (text.length >= 8 && text.length <= 280) {
      let data = {
        'type': 'report_post',
        'box_id': action_id,
        'user_code': CODE,
        'content': text
      }
      addData(data)
    } else {
      top_alert('There is a minimum of 8 and a maximum of 280', '#bb2124')
    }
  } else {
    top_alert('Not enough pen', '#bb2124')
  }
}

const removePost = () => {
  $(`#${action_id}`).remove()
  let data = {
    box_id: action_id,
    user_code: CODE
  }
  $.ajax({
      url: '../server/add_removed_post.php',
      type: 'POST',
      data: data,
      success: function (r) {
        if (r == 'REMOVED_POST-OK') {
          top_alert('Successful', '#265828')
        }
      }
  })
}

const copyText = () => {
  let text = $(`#${action_id}`).children('.text').text()
  navigator.clipboard.writeText(text.trim())
  top_alert('Coppied Text', '#265828')
}

const copyLink = (SHARE_LINK) => {
  navigator.clipboard.writeText(SHARE_LINK + action_id)
  top_alert('Coppied Link', '#265828')
}

const fav = (fav, box_id, user_code, operator, fav_time) => {
  let data = {
    type: 'edit_fav',
    fav: fav,
    box_id: box_id,
    user_code: user_code,
    operator: operator,
    fav_time: fav_time
  }
  editData(data)
}

const favList = (id, type) => {
  getUser(id, type, CODE)
}

const starTransition = (sent_user_code, receive_user_code, type) => {
  let data = {
    type: type,
    sent_user_code: sent_user_code,
    receive_user_code: receive_user_code,
  }
  $.ajax({
      url: '../server/star_transition.php',
      type: 'POST',
      data: data,
      success: function (r) {
        if (r == 'SENDSTAR-OK') {
          STAR -= 1
          $('#profile-page .star').text(STAR)
        }
      }
  })
}

const sendStar = (sent_user_code, receive_user_code) => {
  starTransition(sent_user_code, receive_user_code, 'send_star')
}

const updatePlan = (status, user_code, end_date, SPONSOR) => {
  let data = {
    status: status,
    user_code: user_code,
    end_date: end_date,
    sponsor: SPONSOR
  }
  $.ajax({
      url: '../server/update_plan.php',
      type: 'POST',
      data: data,
      success: function (r) {
        if (r == 'OK') {
          buyStarANDsellStar(SPONSOR, 'one_member_invited_log', 0)
          setTimeout(function() {
            location.reload()
          }, 2000);
        }
      }
  })
}

$('.text-box-more-item').click(function () {
  upboxHide()
})

$('#create-post-text').keyup(function () {
  let text = $(this).val()
  let length = text.trim().length
  $('.create-post-text-check small').text(length)
  if (length > 280 || text.trim() == '') {
    unablePost()
  } else {
    ablePost()
  }
})

$('#post').click(function () {
  unablePost()
  $('#create-post-text').val('')
  $('.create-post-text-check small').text(0)
  $('#create-post-btn').removeClass('edit-post-btn')
})

$('#edit-post').click(function () {
  $('#create-post-btn').addClass('edit-post-btn')
})

$('.hide-user-page').click(function () {
  $('#user-page').hide()
  $('nav, main').show()
  $(`#${LOCATION}`).click()
})

$('.plan-box').click(function () {
  $('.plan-box').removeClass('plan-check')
  $(this).addClass('plan-check')
})

$('#update-plan-btn').click(function () {
  let id = $('.plan-check').attr('id')
  let price = 0
  let plan_start_date = new Date().getDay()
  switch (id) {
    case 'basic-plan':
      if (STAR >= 125) {
        let start_date = new Date()
        start_date.setDate(start_date.getDate() + 180)
        let end_date = start_date.getTime()
        updatePlan('basic', CODE, end_date, SPONSOR)
      } else {
        top_alert('Not enough star', '#bb2124')
      }
      break;
    case 'medium-plan':
      if (STAR >= 225) {
        let start_date = new Date()
        start_date.setDate(start_date.getDate() + 365)
        let end_date = start_date.getTime()
        updatePlan('medium', CODE, end_date, SPONSOR)
      } else {
        top_alert('Not enough star', '#bb2124')
      }
      break;
    
    default:
      if (STAR >= 575) {
        let start_date = new Date()
        let end_date = `unlimited${start_date.getTime()}`
        updatePlan('premium', CODE, end_date, SPONSOR)
      } else {
        top_alert('Not enough star', '#bb2124')
      }
  }(id)
})



//WALLET
const getWalletLogData = (user_code, log_type)  => {
  let all_log_count = 0;
  let recharge_log_count = 0;
  let withdrawal_log_count = 0;
  let buy_pen_log_count = 0;
  let buy_star_log_count = 0;
  let sell_star_log_count = 0;
  let one_member_invited_log_count = 0;
  let ten_member_invited_log_count = 0;
  $('.log-box-container').html('')
  $.ajax({
      url: '../server/wallet_log.php',
      type: 'GET',
      data: 'user_code=' + user_code + '&log_type=' + log_type,
      success: function (r) {
        let log = JSON.parse(r)
        if (log.length > 0) {
          for (let i = 0; i < log.length; i ++) {
            if (log[i].log_title == 'recharge_log') {
              recharge_log_count += 1
            } else if (log[i].log_title == 'withdrawal_log') {
              withdrawal_log_count += 1
            } else if (log[i].log_title == 'buy_pen_log') {
              buy_pen_log_count += 1
            } else if (log[i].log_title == 'buy_star_log') {
              buy_star_log_count += 1
            } else if (log[i].log_title == 'sell_star_log') {
              sell_star_log_count += 1
            } else if (log[i].log_title == 'one_member_invited_log') {
              one_member_invited_log_count += 1
            } else {
              ten_member_invited_log_count += 1
            }
            let time = timeCalculator(log[i].log_time)
            $('.log-box-container')[0].innerHTML += `
                                                      <div class="log-box eb">
                                                        <div>
                                                          <h4>${log[i].log_title.replaceAll('_', ' ').toUpperCase().replace('MEMBER', "AUTHOR")}</h4>
                                                          <i>${time}</i>
                                                        </div>
                                                        <div>
                                                          <small>Amount</small>
                                                          <b>${log[i].amount + MMK}</b>
                                                        </div>
                                                        <div>
                                                          <small>Fee</small>
                                                          <b>${log[i].fee + MMK}</b>
                                                        </div>
                                                        <div>
                                                          <small>Star</small>
                                                          <b>${log[i].star}</b>
                                                        </div>
                                                        <div>
                                                          <small>Date</small>
                                                          <b>${log[i].log_day} ${log[i].log_month} ${log[i].log_year}</b>
                                                        </div>
                                                        <div>
                                                          <small>Transaction ID</small>
                                                          <b>${log[i].transaction_ID}</b>
                                                        </div>
                                                      </div>
                                                      `
          }
          if (log_type == 'all_log') {
            all_log_count = log.length
            $('#all_log small').text(all_log_count)
            $('#recharge_log small').text(buy_pen_log_count)
            $('#withdrawal_log small').text(buy_pen_log_count)
            $('#buy_pen_log small').text(buy_pen_log_count)
            $('#buy_star_log small').text(buy_star_log_count)
            $('#sell_star_log small').text(sell_star_log_count)
            $('#one_member_invited_log small').text(one_member_invited_log_count)
            $('#ten_member_invited_log small').text(ten_member_invited_log_count)
          }
        } else {
          $('.log-box-container')[0].innerHTML = empty_box
        }
        loadingHide()
      }
  })
}

$('#wallet-page').scroll(function() {
  let wallet_page_tab_top = $('#wallet-page .tab').offset().top
  if (wallet_page_tab_top > 57) {
    $('.balance-banner').show()
    $('#wallet-page .tab').removeClass('sticky-tab')
  } else {
    $('.balance-banner').hide()
    $('#wallet-page .tab').addClass('sticky-tab')
  }
});



//PROFILE
const getMemberLists = (CODE) => {
  loadingShow()
  let data = {
    sponsor_code: CODE
  }
  $.ajax({
      url: '../server/get_member_lists.php',
      type: 'POST',
      data: data,
      success: function (r) {
        let members = JSON.parse(r)
        if (members.length == 0) {
          $('.members-container').html(empty_box)
        } else {
          $('.members-container').html('')
          for (let i = 0; i < members.length; i ++) {
            let name = members[i].fname + ' ' + members[i].lname
            let member_item = `
                              <div class="user-item eb">
                                <div class="profile">
                                  <img src="../../images/${members[i].profile}">
                                </div>
                                <b id="${members[i].code}" class="name vb">${name}</b>
                                <small>${members[i].status}</small>
                              </div>
            `
            $('.members-container')[0].innerHTML += member_item
            userDataShow()
          }
        }
        loadingHide()
      }
  })
}

$('#profile-page .tab b').click(function () {
  let w = $(this)[0].offsetWidth + 'px'
  let l = $(this)[0].offsetLeft + 'px'
  $('.tab .tab-selector').css({
    width: w,
    left: l
  })
  $('#profile-page .c-container').hide()
  $('#profile-page .tab b').removeClass('active')
  $(this).addClass('active')
  let id = $(this).attr('id')
  $(`#profile-page #${id}-container`).show()
  switch (id) {
    case 'members':
      LOCATION = 'members'
      getMemberLists(CODE)
      break;
    case 'about':
      return
      break;
    case 'edit-profile':
      return
      break;
    
    default:
      getContent(STAR, CODE, 'profile')
  }
})



//MORE
const nextPageShow = (id) => {
  $('nav, main, .extra-page').hide()
  $('#next-page').show()
  $('#next-page .bar b').text(id.toUpperCase().replace('-', ' '))
}

const nextPageHide = () => {
  $('nav, main').show()
  $('#next-page').hide()
}

let edit = ''

const logoutBoxShow = () => {
  muted()
  $('#logout-box').css('display', 'flex')
  $('#more-page div').css('pointerEvents', 'none')
  $('nav div').css('pointerEvents', 'none')
}

const logoutBoxHide = () => {
  bright()
  $('#logout-box').css('display', 'none')
  $('#more-page div').css('pointerEvents', 'auto')
  $('nav div').css('pointerEvents', 'auto')
}

const editBoxShow = () => {
  muted()
  $('#edit-box').show()
  $('#profile-page div').css('pointerEvents', 'none')
  $('nav div').css('pointerEvents', 'none')
}

const editBoxHide = () => {
  bright()
  $('#edit-box').hide()
  $('#profile-page div').css('pointerEvents', 'auto')
  $('nav div').css('pointerEvents', 'auto')
}

const profileEditData = (type, edit_text, fname, lname, old_p, new_p, gender) =>  {
  let data = {
    type: type,
    edit_text: edit_text,
    fname: fname,
    lname: lname,
    old_p: old_p,
    new_p: new_p,
    gender: gender,
    code: CODE
  }
  $.ajax({
      url: '../server/edit_profile.php',
      type: 'POST',
      data: data,
      success: function (r) {
        if (r == 'PASSWORD_ERR') {
          top_alert('Invalid password', '#bb2124')
        } else if (r == 'OK') {
          top_alert("Successful", '#265828')
          setTimeout(function() { location.reload() }, 1000);
        } else if (r == 'EMAIL_ERR') {
          top_alert('This email is already used', '#bb2124')
        } else if (r == 'PHONE_ERR') {
          top_alert('This phone is already used', '#bb2124')
        } else {
          top_alert('Something wrong', '#bb2124')
        }
      }
  })
}

const sendEditData = (id, current_value, GENDER) => {
  quantity = id.length - 5
  input_id = id.substr(5, quantity)
  if (input_id == 'password') {
    if ($('#old-password').val().length > 7) {
      if ($('#new-password').val().length > 7) {
        let new_password = $('#new-password').val()
        if ($('#confirm-password').val() == new_password) {
          confirm_password = $('#confirm-password').val()
          let old_p = $('#old-password').val()
          let new_p = $('#new-password').val()
          profileEditData(input_id, '', '', '', old_p, new_p, '')
        } else {
          top_alert('Enter two passwords that match', ('#bb2124'))
        }
      } else {
        top_alert('Must be at least 8', ('#bb2124'))
      }
    } else {
      top_alert('Must be at least 8', ('#bb2124'))
    }
  } else {
    if (input_id == 'gender') {
      let new_gender;
      if ($('#gender #male')[0].checked) {
        new_gender = "male"
      } else {
        new_gender = "female"
      }
      if (new_gender == GENDER) {
        top_alert("Can't be the same", '#bb2124')
      } else {
        profileEditData(input_id, '', '', '', '', '', new_gender)
      }
    } else {
      if (input_id == 'name') {
        if ($('#fname').val() != '' && $('#lname').val() != '') {
          let fname = $('#fname').val()
          let lname = $('#lname').val()
          let new_name = fname + ' ' + lname
          if (new_name != current_value) {
            profileEditData(input_id, '', fname, lname, '', '', '')
          } else {
            top_alert("Can't be the same", '#bb2124')
          }
        } else {
          top_alert(`Can't be empty ${input_id}`, '#bb2124')
        }
      } else {
        if ($(`#${input_id}`).val() != '') {
          if ($(`#${input_id}`).val() != current_value) {
            let edit_text = $(`#${input_id}`).val()
            profileEditData(input_id, edit_text, '', '', '', '', '')
          } else {
            top_alert("Can't be the same", '#bb2124')
          }
        } else {
          top_alert(`Can't be empty ${input_id}`, '#bb2124')
        }
      }
    }
  }
}

const logOut = () => {
  localStorage.removeItem("username")
  location.href = '../../login.php?logout=true'
}

$('#logout').click(function () {
  logoutBoxHide()
  logOut()
})

$('#cancel').click(function () {
  logoutBoxHide()
})

$('.logout').click(function () {
  logoutBoxShow()
})

$('.to-next-page').click(function () {
  let id = $(this).attr('id')
  LOCATION = id
  nextPageShow(id)
  if (id == 'sent-star') {
    id = 'star'
  }
  getContent(STAR, CODE, id)
})

$('.hide-next-page').click(function () {
  nextPageHide()
})



//UP-BOX
const upboxShow = () => {
  muted()
  $('#up-box').css('transform', 'translateY(0)')
  $('nav div').css('pointerEvents', 'none')
  $('.page div').css('pointerEvents', 'none')
  $('#next-page-text-box-container .text-box').css('pointerEvents', 'none')
  $('.extra-page .text-box').css('pointerEvents', 'none')
}

const upboxHide = () => {
  bright()
  $('#up-box').css('transform', 'translateY(110%)')
  $('nav div').css('pointerEvents', 'auto')
  $('.page div').css('pointerEvents', 'auto')
  $('#next-page-text-box-container .text-box').css('pointerEvents', 'auto')
  $('.extra-page .text-box').css('pointerEvents', 'auto')
}

const inviteSocial = (link) => {
  $("#invite-list").jsSocials({
    url: link,
    text: "Welcome to Kyal Zin Money Earning Application (1 Member Get 3000Ks)",
    showLabel: false,
    shares: ["twitter", "facebook", "telegram", "viber", "linkedin", "stumbleupon"]
  })
}

let account = 'Wave Money';
let fn;



const target_empty_value = () => {
  if ($('.target input').val() == '') {
    $('.target').removeClass('label-up')
  } else {
    $('.target').addClass('label-up')
  }
}

const curser = () => {
  let length = $('.target input').val().length + 1
  let left = 0
  if (length > 3) {
    left = length * 6.5 + 'px'
  } else {
    left = length * 5 + 'px'
  }
  $('.target').css('--myVar', left)
}

const length_check = () => {
  if ($('#t-no').val().length > 7) {
    let value = $('#t-no').val()
    let result_value = value.slice(0, 7)
    $('#t-no').val(result_value)
  }
  if ($('#amount').val().length > 10) {
    let value = $('#amount').val()
    let result_value = value.slice(0, 10)
    $('#amount').val(result_value)
  }
  if ($('#address').val().length > 11) {
    let value = $('#address').val()
    let result_value = value.slice(0, 11)
    $('#address').val(result_value)
  }
}

const moneyRequest = () => {
  let DATE = new Date()
  let this_year = DATE.getFullYear()
  let this_month = textMonth(DATE.getMonth())
  let today = DATE.getDate()
  let time = DATE.getTime()
  const form = document.getElementById('money-edit-form')
  const data = new FormData(form)
  $.ajax({
    url: '../server/money_requests.php',
    type: 'POST',
    data: data,
    contentType: false,
    processData: false,
    success: function (r) {
      if (r == 'OK') {
        top_alert('Will reply within 24 hours', '#265828')
        upboxHide()
      } else if (r == 'NO') {
        top_alert('Not enough balance', '#bb2124')
      }
    }
  })
}

const deposit = () => {
  let t_no = ''
  let slip = ''
  let amount = ''
  let address = ''
  if ($('#t-no').val().length == 7) {
    t_no = $('#t-no').val()
    if ($('.upload-slip').val() != '') {
      slip = $('.upload-slip').prop('files')[0]
      if (slip.type == 'image/png' || slip.type == 'image/jpg' || slip.type == 'image/jpeg') {
        slip = $('.upload-slip').prop('files')[0]
        if (slip.size <= 1000000) {
          slip = $('.upload-slip').prop('files')[0]
          if ($('#amount').val() > 0) {
            amount = $('#amount').val()
            if ($('#address').val().length == 11) {
              address = $('#address').val()
              moneyRequest()
            } else {
              top_alert('Invalid Address', '#bb2124')
            }
          } else {
            top_alert('Invalid Amount', '#bb2124')
          }
        } else {
        top_alert('File Size Not Allow', '#bb2124')
        }
      } else {
        top_alert('File Type Not Allow', '#bb2124')
      }
    } else {
      top_alert('Invalid Slip', '#bb2124')
    }
  } else {
    top_alert('Invalid Digits', '#bb2124')
  }
}

const withdrawal = () => {
  let amount = ''
  let address = ''
  if ($('#amount').val() > 0 && $('#amount').val() <= parseInt(BALANCE, 10)) {
    amount = $('#amount').val()
    if ($('#address').val().length == 11) {
      address = $('#address').val()
      moneyRequest()
    } else {
      top_alert('Invalid Address', '#bb2124')
    }
  } else {
    top_alert('Invalid Amount', '#bb2124')
  }
}

const buyStarANDsellStar = (CODE, log_type, pen_amount) => {
  if (log_type == 'buy_star_log' || log_type == 'sell_star_log') {
    price = $('.buy-star-box .price').text()
    star_amount = $('#star-amount').val() * 1
  }
  if (log_type == 'one_member_invited_log' || log_type == 'ten_member_invited_log') {
    price = 0
    star_amount = 0
  }
  let DATE = new Date()
  let this_year = DATE.getFullYear()
  let this_month = textMonth(DATE.getMonth())
  let today = DATE.getDate()
  let time = DATE.getTime()
  let data = {
    user_code: CODE,
    log_type: log_type,
    amount: price,
    star: star_amount,
    pen: pen_amount,
    fee: (star_amount * 500) * 0.25,
    day: today,
    month: this_month,
    year: this_year,
    time: time
  }
  $.ajax({
    url: '../server/add_wallet_log.php',
    type: 'POST',
    data: data,
    success: function (r) {
      if (r == 'OK') {
        upboxHide()
        top_alert('Successful', '#265828')
      } else {
        top_alert(r, '#bb2124')
      }
    }
  })
}

const buyStar = () => {
  let price = 0
  if ($('.buy-star-box .price').text() <= BALANCE) {
    buyStarANDsellStar(CODE, 'buy_star_log', 0)
  } else {
    top_alert('Not Enough Balance.', '#bb2124')
  }
}

const sellStar = () => {
  let star = 0
  if ($('.buy-star-box #star-amount').val() <= STAR) {
    if ($('.buy-star-box #star-amount').val() >= 100 && $('.buy-star-box #star-amount').val() <= 100000) {
      star = $('.buy-star-box #star-amount').text()
      buyStarANDsellStar(CODE, 'sell_star_log', 0)
    } else {
    top_alert('100 to 100000', '#bb2124')
    }
  } else {
    top_alert('Not Enough Star.', '#bb2124')
  }
}

const starCheck = (fn, BALANCE, STAR) => {
  let price = $('.buy-star-box .price').text()
  let star_amount = $('.buy-star-box #star-amount').val()
  if (fn == 'Buy Star') {
    if (price > parseInt(BALANCE, 10)) {
      $('#star-amount').css({
        border: '1px solid #bb2124',
        color: '#bb2124'
      })
      top_alert('Not Enough Balance.', '#bb2124')
    } else {
      $('#star-amount').css({
        border: '1px solid #212529',
        color: '#c7c7c7'
      })
    }
  } else {
    if (star_amount > parseInt(STAR, 10)) {
      $('#star-amount').css({
        border: '1px solid #bb2124',
        color: '#bb2124'
      })
      top_alert('Not Enough Star.', '#bb2124')
    } else {
      $('#star-amount').css({
        border: '1px solid #212529',
        color: '#c7c7c7'
      })
    }
  }
}

const starCalculatePrice = (fn) => {
  let star_amount = $('#star-amount').val()
  let price = 500
  if (star_amount == '') {
    star_amount = 0
  }
  let result = star_amount * price
  if (fn == 'Buy Star') {
    $('.buy-star-box .price').text(result)
  } else {
    $('.buy-star-box .price').text(result * .75)
  }
}

$('.invite-link-copy').click(function () {
  navigator.clipboard.writeText($('#invite-url').text())
})

$('.deposit').click(function () {
  fn = 'Deposit'
  $('.title').text(fn)
  $('.accounts').show()
  $('#money-edit-page form > .input').show()
  $('.buy-star-box').hide()
  $('.t-no').click()
  $('#true').click()
})

$('.withdrawal').click(function () {
  fn = 'Withdrawal'
  $('.title').text(fn)
  $('.accounts').show()
  $('#money-edit-page form > .input').hide()
  $('.buy-star-box').hide()
  $('.amount').show()
  $('.address').show()
  $('#amount').click()
  $('#true').click()
})

$('.buy-star, .sell-star').click(function () {
  $('.accounts').hide()
  $('#money-edit-page form > .input').hide()
  $('.buy-star-box').show()
  $('#star-amount').click()
  $('.buy-star-box .price').text(0)
  $('#star-amount').css({
    border: '1px solid #212529',
    color: '#c7c7c7'
  })
})

$('.buy-star').click(function () {
  fn = 'Buy Star'
  $('.title').text(fn)
})

$('.sell-star').click(function () {
  fn = 'Sell Star'
  $('.title').html(fn + "&nbsp;<b>(</b><i>fee - 0.25%</i><b>)</b>")
  $('#star-amount').val('100')
})

$('.check').click(function () {
  let id = $(this).attr('id')
  switch (id) {
    case 'wave':
      account = 'Wave Money'
      $('.to div').text('09269223997')
      $('#d-w-exchange').show()
      break;
    default:
      account = 'KBZ Pay'
      $('.to div').text('09269223997')
      $('#d-w-exchange').show()
  }
  $('.check').removeClass('checked')
  $(this).addClass('checked')
  length_check()
  curser()
  $('#account').val(account)
})

$('.copy-address').click(function () {
  navigator.clipboard.writeText($('.to div').text())
})

$('.t-no').click(function () {
  $('.input').removeClass('target')
  $('.t-no').addClass('target')
  $('.t-no').addClass('label-up')
  if ($('.amount input').val() != '') {
    $('.amount').addClass('label-up')
  } else {
    $('.amount').removeClass('label-up')
  }
  if ($('.address input').val() != '') {
    $('.address').addClass('label-up')
  } else {
    $('.address').removeClass('label-up')
  }
  curser()
})

$('#upload-slip').click(function () {
  $('.upload-slip').click()
})

$('.upload-slip').change( function () {
  if (this.files[0]) {
    var reader = new FileReader()
    reader.onload = function (e) {
      var url = e.target.result
      $('#upload-slip').html(`<img src='${url}'>`)
    }
    reader.readAsDataURL(this.files[0])
  }
})

$('.amount').click(function () {
  $('.input').removeClass('target')
  $('.amount').addClass('target')
  $('.amount').addClass('label-up')
  if ($('.t-no input').val() != '') {
    $('.t-no').addClass('label-up')
  } else {
    $('.t-no').removeClass('label-up')
  }
  if ($('.address input').val() != '') {
    $('.address').addClass('label-up')
  } else {
    $('.address').removeClass('label-up')
  }
  curser()
})

$('.address').click(function () {
  $('.input').removeClass('target')
  $('.address').addClass('target')
  $('.address').addClass('label-up')
  if ($('.t-no input').val() != '') {
    $('.t-no').addClass('label-up')
  } else {
    $('.t-no').removeClass('label-up')
  }
  if ($('.amount input').val() != '') {
    $('.amount').addClass('label-up')
  } else {
    $('.amount').removeClass('label-up')
  }
  curser()
})

$('#star-amount').click(function () {
  $(this).parent().addClass('target')
})

$('.submit').click(function () {
  switch (fn) {
    case 'Deposit':
      deposit()
      break;
    case 'Buy Star':
      buyStar()
      break;
    case 'Sell Star':
      sellStar()
      break;
    default:
      withdrawal()
  }
})

$('#plus').click(function () {
  let star_amount = $('#star-amount').val()
  if (star_amount == '') {
    $('#star-amount').val(1)
  } else {
    $('#star-amount').val(parseInt(star_amount, 10) + 1)
  }
  starCalculatePrice(fn)
  starCheck(fn, BALANCE, STAR)
})

$('#minus').click(function () {
  let star_amount = $('#star-amount').val()
  if (star_amount == '' || star_amount == 0) {
    $('#star-amount').val(0)
  } else {
    $('#star-amount').val(parseInt(star_amount, 10) - 1)
  }
  starCalculatePrice(fn)
  starCheck(fn, BALANCE, STAR)
})

$('.keyboard div div').click(function () {
  $('.voice').attr('src', '../../audios/one.wav')
  $('.voice').trigger('play')
  let num = $('.target input').val() + $(this).text()
  $('.target input').val(num)
  target_empty_value()
  length_check()
  curser()
  starCalculatePrice(fn)
  starCheck(fn, BALANCE, STAR)
})

$('#del').click(function () {
      let num = $('.target input').val()
      let end_point = num.length - 2
      let deleted_num = num.slice(0, end_point)
      $('.target input').val(deleted_num)
      target_empty_value()
      curser()
      starCalculatePrice(fn)
      starCheck(fn, BALANCE, STAR)
    })
