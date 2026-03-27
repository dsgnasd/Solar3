# File Upload Area Molecule — Solar3 Design System

> Source: Figma → "Components" frame (FileUpload, Upload Area, File Uploaded)
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Комплексный компонент загрузки файлов. Состоит из двух независимых суб-компонентов:

| Суб-компонент | Роль |
|---|---|
| **Upload Area** | Зона drag-and-drop / кнопка выбора файла |
| **File Uploaded** | Строка загруженного (или загружающегося) файла |

Компоненты всегда используются вместе: Upload Area располагается сверху, File Uploaded строки появляются под ней по мере добавления файлов.

---

## 1. Upload Area

### Props / Variants

| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `type` | `Inactive`, `Active` | `Inactive` | Активна ли зона для взаимодействия |
| `state` | `-`, `Default`, `Hovered`, `Error-drag` | `-` | Интерактивное состояние (только при `type=Active`) |
| `errorMessage` | bool | `false` | Показать подсказку об ошибке под зоной |

> `type=Inactive` соответствует `state="-"` — зона отображается, но не кликабельна (например, когда достигнут лимит файлов).

---

### Sizing

| Свойство | Значение |
|----------|----------|
| Width | 100% (fluid) |
| Height | `142px` |
| Padding | `28px` top/bottom, `32px` left/right |
| Border Radius | `12px` (`--radius-md`) |
| Gap (иконка ↔ textbox) | `12px` (`--spacing-6`) |
| Gap (title ↔ subtitle) | `4px` (`--spacing-2`) |

---

### States

| State | Background | Border | Иконка | Текст «Выберите файл» | Остальной текст |
|-------|------------|--------|--------|-----------------------|-----------------|
| **Inactive** (`type=Inactive`) | `var(--background/light, #fafafa)` | `1px dashed --color-border-default (#cdcdcd)` | Серая (document-disabled) | `--color-text-tertiary` / Medium | `--color-text-tertiary` |
| **Active Default** | `var(--background/light, #fafafa)` | `1px dashed --color-border-default (#cdcdcd)` | Золотая (document) | `--color-primary-800 (#7a6741)` / **Semibold + underline** | `--color-text-secondary` |
| **Active Hovered** | `var(--color-primary-200, #efe5d1)` | `1px dashed --color-border-default (#cdcdcd)` | Золотая | `--color-primary-800` / Semibold + underline | `--color-text-secondary` |
| **Active Error-drag** | `var(--background/error, #ffe5e4)` | нет (border убирается) | Красная (document-error) | `--color-error-700 (#bd132b)` / Semibold + underline | `--color-text-error-default (#bd132b)` |

---

### Anatomy

```
┌──────────────────────────────────────────────────────┐  ← border dashed 1px
│                                                      │
│                  [document icon 30×32]               │  ← shrink-0
│                                                      │
│          Выберите файл  или перетащите его сюда      │  ← Title row, gap 4px
│          Формат: XLSX, PDF, DOC размер до 10 МБ      │  ← Subtitle
│                                                      │
└──────────────────────────────────────────────────────┘
  [⚠ Размер файла превышает допустимый.]               ← errorMessage (опц.), gap-y 8px
```

**Document icon:**
- Container: `30×32px`
- Inactive: серая иконка (`document-disabled`)
- Active Default / Hovered: золотая иконка (`document`)
- Error-drag: красная иконка (`document-error`)

**Title row:**
- `display: flex; gap: 4px; align-items: center; justify-content: center`
- «Выберите файл» — Body 1 fix / Semibold (Active) или Medium (Inactive), кликабельная часть, `text-decoration: underline` в Active состояниях
- «или перетащите его сюда» — Body 1 fix / Medium, не кликабельна

**Subtitle:**
- Body 2 fix / Medium — 13px, 500
- `text-align: center`

---

### Error hint (Подсказка при ошибке)

Отображается под Upload Area через `gap: 8px` при `errorMessage=true`.

| Свойство | Значение |
|----------|----------|
| Height | `36px` |
| Padding | `10px 12px` |
| Border Radius | `8px` (`--radius-sm`) |
| Background | `var(--background/error, #ffe5e4)` |
| Icon | `danger` 12×12px, `padding-top: 2px` для выравнивания с текстом |
| Icon gap | `4px` |
| Text style | Caption 1 / Regular — 12px, 400 |
| Text color | `var(--color-text-error-default, #bd132b)` |

---

### CSS Implementation

```css
/* Wrapper */
.upload-area-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;          /* --spacing-4 */
  width: 100%;
}

/* Drop zone */
.upload-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;         /* --spacing-6 */
  padding: 28px 32px;
  width: 100%;
  border-radius: 12px; /* --radius-md */
  background: var(--background/light, #fafafa);
  border: 1px dashed var(--color-border-default, #cdcdcd);
  cursor: pointer;
  transition:
    background var(--duration-normal) var(--easing-default),
    border-color var(--duration-normal) var(--easing-default);
}

/* States */
.upload-area--inactive {
  cursor: default;
  pointer-events: none;
}

.upload-area--hovered,
.upload-area:hover {
  background: var(--color-primary-200, #efe5d1);
}

.upload-area--error-drag {
  background: var(--background/error, #ffe5e4);
  border: none;
}

/* Icon */
.upload-area__icon {
  width: 30px;
  height: 32px;
  flex-shrink: 0;
}

/* Textbox */
.upload-area__textbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;          /* --spacing-2 */
}

.upload-area__title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

/* "Выберите файл" — кликабельная часть */
.upload-area__link {
  font-size: 14px;   /* --typography/body1fixsize */
  font-weight: 600;  /* Semibold в Active */
  line-height: 20px; /* --typography/body1fixline */
  letter-spacing: -0.14px;
  color: var(--color-primary-800, #7a6741);
  text-decoration: underline;
  cursor: pointer;
}

.upload-area--inactive .upload-area__link {
  font-weight: 500;
  color: var(--color-text-tertiary, #9a9a9a);
  text-decoration: none;
  cursor: default;
}

.upload-area--error-drag .upload-area__link {
  color: var(--color-error-700, #bd132b);
}

/* "или перетащите его сюда" */
.upload-area__hint {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.14px;
  color: var(--color-text-secondary, #676767);
  white-space: nowrap;
}

.upload-area--inactive .upload-area__hint,
.upload-area--error-drag .upload-area__hint {
  color: inherit; /* tertiary / error */
}

/* Subtitle */
.upload-area__subtitle {
  font-size: 13px;   /* --typography/body2fixsize */
  font-weight: 500;
  line-height: 18px; /* --typography/body2fixline */
  letter-spacing: -0.13px;
  color: var(--color-text-secondary, #676767);
  text-align: center;
}

.upload-area--inactive .upload-area__subtitle {
  color: var(--color-text-tertiary, #9a9a9a);
}

.upload-area--error-drag .upload-area__subtitle {
  color: var(--color-text-error-default, #bd132b);
}

/* Error hint */
.upload-error-hint {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  height: 36px;
  padding: 10px 12px;
  border-radius: 8px; /* --radius-sm */
  background: var(--background/error, #ffe5e4);
  width: 100%;
  overflow: hidden;
}

.upload-error-hint__icon {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  margin-top: 2px; /* выравнивание иконки с текстом */
}

.upload-error-hint__text {
  font-size: 12px;   /* --typography/caption1size */
  font-weight: 400;
  line-height: 16px; /* --typography/caption1line */
  color: var(--color-text-error-default, #bd132b);
  white-space: nowrap;
}
```

---

## 2. File Uploaded

Строка, отображающая один файл после добавления в Upload Area.

### Props / Variants

| Prop | Values | Default | Description |
|------|--------|---------|-------------|
| `state` | `Default`, `Uploading` | `Default` | Состояние файла |
| `fileIcon` | bool | `true` | Показать иконку файла (Default) или лоадер (Uploading) |
| `title` | bool | `true` | Имя файла (Default) или «Загрузка...» (Uploading) |
| `description` | bool | `true` | Размер файла (только в Default) |
| `hasTrailingIcon` | bool | `true` | Иконка закрытия (×) справа |
| `helpMessage` | bool | `false` | Сообщение об ошибке под строкой (для Error-состояния) |

---

### Sizing

| Свойство | Значение |
|----------|----------|
| Height | `70px` |
| Padding | `16px 20px` |
| Border Radius | `12px` (`--radius-md`) |
| Border | `1px solid var(--color-border-default, #cdcdcd)` |
| Background | `var(--background/secondary, white)` |
| Gap (leading ↔ trailing) | `20px` |
| Gap (file icon ↔ textbox) | `12px` |

---

### States

#### Default — файл загружен

```
[FileTypeIcon 32×32]  [Имя файла.doc         ]  [× close 20×20]
                      [241 KB                 ]
```

- **File Type Icon**: `32×32px`, sm-размер. Содержит иконку страницы + цветной бейдж с расширением (DOC — синий `#1582b4`, PDF — красный, XLSX — зелёный и т.д.)
- **Title**: Body 1 fix / Medium, `--color-text-primary`, truncated с `...` при переполнении
- **Description** (размер): Body 2 fix / Regular — 13px, 400, `--color-text-secondary`
- **Trailing**: `close-circle` 20×20px — удаление файла

#### Uploading — идёт загрузка

```
[Loader Gold 20×20]  [Загрузка...            ]  [× close 20×20]
```

- **Leading icon**: `Loader` (Gold, 20×20px) — анимированный спиннер, цвет `--color-primary-500`
- **Title**: «Загрузка...» — Body 1 fix / Medium, `--color-text-primary`, `width: 100%`
- Нет description (размер не известен)
- **Trailing**: `close-circle` 20×20px — отмена загрузки

#### Error — ошибка загрузки

Визуально идентичен Default, но с `helpMessage=true` и дополнительными trailing-иконками (reload + close).

- **Help message** под строкой: Caption 1 / Regular, `--color-text-error-default (#bd132b)`
- Текст: «Повторите загрузку или выберите новый файл»
- Height message-строки: `16px`
- Gap строка ↔ message: `8px`
- **Trailing**: иконка reload (20×20) + иконка close-circle (20×20), gap `8px`

---

### CSS Implementation

```css
/* File row */
.file-uploaded {
  display: flex;
  flex-direction: column;
  gap: 8px;          /* --spacing-4 (для helpMessage) */
  width: 100%;
}

.file-uploaded__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 70px;
  padding: 16px 20px;
  border-radius: 12px; /* --radius-md */
  border: 1px solid var(--color-border-default, #cdcdcd);
  background: var(--background/secondary, white);
  width: 100%;
  box-sizing: border-box;
}

/* Leading section */
.file-uploaded__leading {
  display: flex;
  align-items: center;
  gap: 12px;         /* --spacing-6 */
  flex: 1 0 0;
  min-width: 0;
}

/* File type icon (sm = 32×32) */
.file-type-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  position: relative;
}

.file-type-icon__badge {
  position: absolute;
  bottom: 14%; right: 24%;
  left: 2%;
  background: #1582b4; /* info — varies by type */
  border-radius: 1.6px;
  padding: 1.6px 2.4px;
  font-size: 8px;
  font-weight: 700;
  color: white;
  text-align: center;
  white-space: nowrap;
  line-height: normal;
}

/* Textbox */
.file-uploaded__textbox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  min-width: 0;
}

.file-uploaded__title {
  font-size: 14px;   /* --typography/body1fixsize */
  font-weight: 500;
  line-height: 20px; /* --typography/body1fixline */
  letter-spacing: -0.14px;
  color: var(--color-text-primary, #1c1c1c);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-uploaded__size {
  font-size: 13px;   /* --typography/body2fixsize */
  font-weight: 400;
  line-height: 18px; /* --typography/body2fixline */
  letter-spacing: -0.13px;
  color: var(--color-text-secondary, #676767);
  white-space: nowrap;
}

/* Loader (Uploading state) */
.file-uploaded__loader {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  /* Используется готовый компонент Loader с color=Gold */
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Trailing */
.file-uploaded__trailing {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.file-uploaded__trailing-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 1;
  transition: opacity var(--duration-fast);
}
.file-uploaded__trailing-icon:hover { opacity: 0.6; }

/* Help message (Error state) */
.file-uploaded__message {
  height: 16px;
  display: flex;
  align-items: center;
  width: 100%;
}

.file-uploaded__message-text {
  font-size: 12px;   /* --typography/caption1size */
  font-weight: 400;
  line-height: 16px; /* --typography/caption1line */
  color: var(--color-text-error-default, #bd132b);
  flex: 1 0 0;
}
```

---

## 3. Полная композиция

Типичное использование: Upload Area + список загруженных файлов.

```html
<!-- Upload section -->
<div class="upload-section">

  <!-- Drop zone -->
  <div class="upload-area-wrapper">
    <div
      class="upload-area upload-area--active"
      role="button"
      tabindex="0"
      aria-label="Загрузить файл"
    >
      <img class="upload-area__icon" src="icons/document.svg" alt="" />
      <div class="upload-area__textbox">
        <div class="upload-area__title-row">
          <span class="upload-area__link">Выберите файл</span>
          <span class="upload-area__hint">или перетащите его сюда</span>
        </div>
        <span class="upload-area__subtitle">Формат: XLSX, PDF, DOC размер до 10 МБ</span>
      </div>
    </div>
    <!-- errorMessage (показывается при ошибке) -->
    <div class="upload-error-hint" hidden>
      <img class="upload-error-hint__icon" src="icons/danger.svg" alt="" />
      <span class="upload-error-hint__text">Размер файла превышает допустимый.</span>
    </div>
  </div>

  <!-- Uploaded files list -->
  <div class="upload-files-list">

    <!-- Default: файл загружен -->
    <div class="file-uploaded">
      <div class="file-uploaded__row">
        <div class="file-uploaded__leading">
          <div class="file-type-icon">
            <img src="icons/page.svg" alt="" />
            <span class="file-type-icon__badge">DOC</span>
          </div>
          <div class="file-uploaded__textbox">
            <span class="file-uploaded__title">Уведомление о предос...рингу.doc</span>
            <span class="file-uploaded__size">241 KB</span>
          </div>
        </div>
        <div class="file-uploaded__trailing">
          <button class="file-uploaded__trailing-icon" aria-label="Удалить файл">
            <img src="icons/close-circle.svg" alt="" />
          </button>
        </div>
      </div>
    </div>

    <!-- Uploading: идёт загрузка -->
    <div class="file-uploaded">
      <div class="file-uploaded__row">
        <div class="file-uploaded__leading">
          <img class="file-uploaded__loader" src="icons/loader-gold.svg" alt="" />
          <div class="file-uploaded__textbox">
            <span class="file-uploaded__title">Загрузка...</span>
          </div>
        </div>
        <div class="file-uploaded__trailing">
          <button class="file-uploaded__trailing-icon" aria-label="Отменить загрузку">
            <img src="icons/close-circle.svg" alt="" />
          </button>
        </div>
      </div>
    </div>

    <!-- Error: ошибка загрузки -->
    <div class="file-uploaded">
      <div class="file-uploaded__row">
        <div class="file-uploaded__leading">
          <div class="file-type-icon">
            <img src="icons/page.svg" alt="" />
            <span class="file-type-icon__badge">DOC</span>
          </div>
          <div class="file-uploaded__textbox">
            <span class="file-uploaded__title">Уведомление о предос...рингу.doc</span>
            <span class="file-uploaded__size">241 KB</span>
          </div>
        </div>
        <div class="file-uploaded__trailing">
          <button class="file-uploaded__trailing-icon" aria-label="Повторить загрузку">
            <img src="icons/reload.svg" alt="" />
          </button>
          <button class="file-uploaded__trailing-icon" aria-label="Удалить файл">
            <img src="icons/close-circle.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="file-uploaded__message">
        <span class="file-uploaded__message-text">Повторите загрузку или выберите новый файл</span>
      </div>
    </div>

  </div>
</div>
```

---

## Rules for AI assistants

- ✅ Upload Area всегда `width: 100%` — не задавай фиксированную ширину
- ✅ Граница зоны всегда `dashed`, не `solid` — только в `Error-drag` граница полностью убирается
- ✅ В Active состояниях «Выберите файл» — это кликабельная ссылка с `text-decoration: underline`, не просто текст
- ✅ В `Inactive` состоянии убери `pointer-events` — зона полностью некликабельна
- ✅ В `Uploading` — leading-иконка это **Loader (Gold)**, не file type icon; description (размер) скрыт
- ✅ В `Error` для File Uploaded — два trailing-icon (reload + close), gap между ними `8px`
- ✅ `helpMessage` у File Uploaded — отдельный элемент под строкой, `height: 16px`, gap `8px`
- ✅ Loader должен быть анимирован (`animation: spin 1s linear infinite`)
- ❌ Не используй `border: solid` для Upload Area — только `dashed`
- ❌ Не показывай `description` (размер файла) в состоянии `Uploading`
- ❌ Не смешивай `upload-error-hint` (ошибка в зоне) и `file-uploaded__message` (ошибка у файла) — это разные компоненты
- ❌ Не задавай фиксированную высоту Upload Area если файлы не влезают — зона не растягивается, файлы рендерятся под ней
