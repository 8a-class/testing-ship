function random() {
    // это число должно совпадать с максимальным индексом таблицы ссылок
    return Math.round(Math.random() * 12);
    return Math.round(Math.random() * 17);
  }
  
  function func() {
  
    let name1 = document.getElementById('name1')
    let name2 = document.getElementById('name2')
  
    let men = ["Андреев", "Анисимов", "Егоров", "Иритков", "Кириллов", "Лебедев", "Матвеев", "Морозов", "Пинегин", "Саутов", "Софронов", "Шкаралевич", "Шутов"]
    let women = ["Алексеева", "Белова", "Видунова", "Гордеева", "Давыдова", "Димитриева", "Иванова", "Кадилова", "Капралова", "Краснова", "Михайлова", "Перепелкина", "Петухова", "Пикеева", "Сорокина", "Тунгулова", "Хураськина"]

  
    name1.innerHTML = men[random()]
    name2.innerHTML = women[random()]

  }
