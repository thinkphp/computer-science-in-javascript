class ThemeToggle extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
                this.shadowRoot.innerHTML = `
                    <style>
                        .theme-switch-wrapper {
                            position: fixed;
                            top: 20px;
                            right: 20px;
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            z-index: 999;
                        }
                        .theme-switch {
                            display: inline-block;
                            height: 34px;
                            position: relative;
                            width: 60px;
                        }
                        .theme-switch input {
                            display: none;
                        }
                        .slider {
                            background-color: var(--switch-bg, #e2e2e2);
                            bottom: 0;
                            cursor: pointer;
                            left: 0;
                            position: absolute;
                            right: 0;
                            top: 0;
                            transition: .4s;
                            border-radius: 34px;
                        }
                        .slider:before {
                            background-color: var(--switch-circle, #ffffff);
                            bottom: 4px;
                            content: "";
                            height: 26px;
                            left: 4px;
                            position: absolute;
                            transition: .4s;
                            width: 26px;
                            border-radius: 50%;
                        }
                        input:checked + .slider:before {
                            transform: translateX(26px);
                        }
                        .slider:after {
                            content: "☀️";
                            position: absolute;
                            left: 8px;
                            top: 8px;
                            font-size: 16px;
                        }
                        input:checked + .slider:after {
                            content: "🌙";
                            left: 35px;
                        }
                        :host([theme="dark"]) .slider {
                            background-color: var(--switch-bg-dark, #365acc);
                        }
                    </style>
                    <div class="theme-switch-wrapper">
                        <label class="theme-switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                `;
            }

            connectedCallback() {
                this.checkbox = this.shadowRoot.querySelector('input');
                this.checkbox.addEventListener('change', () => {
                    this.setTheme(this.checkbox.checked ? 'dark' : 'light');
                });

                const initialTheme = this.getInitialTheme();
                this.setTheme(initialTheme);
            }

            getInitialTheme() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) return savedTheme;
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }

            setTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
                this.setAttribute('theme', theme);
                if (this.checkbox) {
                    this.checkbox.checked = theme === 'dark';
                }
            }
        }

        customElements.define('theme-toggle', ThemeToggle);
