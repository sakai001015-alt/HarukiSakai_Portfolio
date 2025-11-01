import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // エミッターがないため、軽量版の loadSlim を使用

// シンプルな右流れパーティクルの設定
const simpleRightFlowOptions = {
    // ========== コア設定 ==========
    fpsLimit: 60,
    detectRetina: true,
    background: { 
        color: { value: "#f7f7f7" } // 背景
    },
    
    // ========== パーティクル基本設定 ==========
    particles: {
        // groups と zIndex の複雑な設定は除去
        number: {
            value: 100, // パーティクルの数を減らし、シンプルに
            density: { enable: false }
        },
        color: { value: "#f7f7f7d0" }, // 白い円
        shape: { type: "circle" },
        opacity: { value: { min: 0.5, max: 1 } },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 3, // 速度を調整
            direction: "right",
            straight: true,
            outModes: "out"
        },
        // ZIndexのグループ設定は除去、基本値のみ維持
        zIndex: {
            value: 5
        }
    },

    // ========== ユーザーインタラクション ==========
    interactivity: {
        detectsOn: "canvas",
        events: {
            // クリック時の特殊な push (Zグループ生成) を除去し、デフォルトに
            onClick: { enable: true, mode: "push" }, 
            onHover: { enable: false },
            resize: true
        },
        modes: {
             // push の groups 設定を除去
            push: {
                quantity: 4,
            },
            // ... (その他のインタラクションモードは省略またはデフォルト)
        }
    },
};

// -------------------------------------------------------------

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    // エンジンの初期化と機能のロード
    useEffect(() => {
        // エミッターや複雑な機能を使わないため、軽量な loadSlim を推奨
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); 
        }).then(() => {
            setInit(true);
        });
    }, []);

    // 設定オプションを useMemo でキャッシュ
    const options = useMemo(() => simpleRightFlowOptions, []);

    // 初期化が完了したらParticlesコンポーネントをレンダリング
    if (init) {
        return (
            <Particles
                id="simple-particles-bg"
                options={options}
                // 背景として固定配置
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0 
                }}
            />
        );
    }

    return null; 
};

export default ParticlesBackground;